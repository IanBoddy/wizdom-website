import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const { email, productId } = (await req.json()) as {
            email: string;
            productId: string;
        };

        if (!email || !productId) {
            return new Response("Missing email/productId", { status: 400 });
        }

        const admin = supabaseAdmin();

        // 1) Verify they own it
        const { data: owned, error: ownErr } = await admin
            .from("purchases")
            .select("id")
            .eq("email", email)
            .eq("product_id", productId)
            .eq("status", "paid")
            .limit(1);

        if (ownErr) throw ownErr;
        if (!owned?.length) return new Response("No purchase found", { status: 403 });

        // 2) Get the storage path from products table
        const { data: product, error: pErr } = await admin
            .from("products")
            .select("storage_path")
            .eq("id", productId)
            .maybeSingle();

        if (pErr) throw pErr;
        if (!product?.storage_path) return new Response(`Unknown product: ${productId}`, { status: 400 });

        // 3) Create signed URL
        const { data, error } = await admin.storage
            .from("downloads")
            .createSignedUrl(product.storage_path, 60 * 10);

        if (error) throw error;

        return Response.json({ url: data.signedUrl });
    } catch (e) {
        console.error(e);
        return new Response("Signed URL error", { status: 500 });
    }
}