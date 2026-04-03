import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const { email } = (await req.json()) as { email: string };
        if (!email) return Response.json({ items: [] });

        const admin = supabaseAdmin();

        const { data, error } = await admin
            .from("purchases")
            .select("id, product_id, created_at, status")
            .eq("email", email)
            .eq("status", "paid")
            .order("created_at", { ascending: false });

        if (error) throw error;

        const items =
            (data || []).map((p) => ({
                id: p.id,
                productId: p.product_id,
                name: p.product_id === "focus-blueprint" ? "Focus Blueprint™" : p.product_id,
                createdAt: p.created_at,
            })) ?? [];

        return Response.json({ items });
    } catch (e) {
        console.error(e);
        return new Response("List purchases error", { status: 500 });
    }
}