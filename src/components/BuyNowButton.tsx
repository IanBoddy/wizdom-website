"use client";

import { useState } from "react";

export default function BuyNowButton({
    productId = "focus-blueprint",
    children = "Buy now",
}: {
    productId?: string;
    children?: string;
}) {
    const [loading, setLoading] = useState(false);

    async function onClick() {
        try {
            setLoading(true);

            const res = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productId }),
            });

            // ✅ Read as text first so you can surface real server errors
            const raw = await res.text();

            if (!res.ok) {
                throw new Error(raw || `Checkout failed (HTTP ${res.status})`);
            }

            const data = JSON.parse(raw) as { url: string };
            if (!data?.url) throw new Error("Checkout failed: missing redirect url");

            window.location.href = data.url;
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : String(e);
            console.error(message);
            alert(message || "Checkout failed. Please try again.");
            setLoading(false);
        }
    }

    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
        >
            {loading ? "Redirecting…" : children}
        </button>
    );
}