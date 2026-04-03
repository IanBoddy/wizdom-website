import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

function siteUrl() {
    return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function POST(req: Request) {
    try {
        const { productId } = (await req.json()) as { productId: string };
        if (!productId) return new Response("Missing productId", { status: 400 });

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

        const admin = supabaseAdmin();
        const { data: product, error } = await admin
            .from("products")
            .select("id, name, stripe_price_id")
            .eq("id", productId)
            .maybeSingle();

        if (error) throw error;
        if (!product?.stripe_price_id) return new Response("Product not found", { status: 404 });

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [{ price: product.stripe_price_id, quantity: 1 }],
            success_url: `${siteUrl()}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${siteUrl()}/${productId}`,
            allow_promotion_codes: true,
            // so we can map the purchase cleanly in the webhook:
            metadata: { product_id: product.id },
        });

        return Response.json({ url: session.url });
    } catch (e) {
        console.error(e);
        return new Response("Checkout error", { status: 500 });
    }
}