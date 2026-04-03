import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const sig = req.headers.get("stripe-signature");
    if (!sig) return new Response("Missing signature", { status: 400 });

    const rawBody = await req.text();

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error("Webhook signature verify failed:", err);
        return new Response("Bad signature", { status: 400 });
    }

    try {
        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;

            const email = session.customer_details?.email || session.customer_email;
            const productId = session.metadata?.product_id;

            if (!email || !productId) return new Response("ok", { status: 200 });

            const admin = supabaseAdmin();
            const { error } = await admin.from("purchases").insert({
                email,
                product_id: productId,
                stripe_session_id: session.id,
                stripe_payment_intent_id: String(session.payment_intent || ""),
                amount_total: session.amount_total ?? null,
                currency: session.currency ?? null,
                status: "paid",
            });

            // If it’s a duplicate insert, ignore (idempotent-ish)
            if (error) console.error("Supabase insert error:", error);
        }

        return new Response("ok", { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response("Webhook handler error", { status: 500 });
    }
}