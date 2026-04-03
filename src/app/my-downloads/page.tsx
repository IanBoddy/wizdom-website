"use client";

import { useState } from "react";

type Item = {
    id: string;
    productId: string;
    name: string;
    createdAt: string;
};

export default function MyDownloadsPage() {
    const [email, setEmail] = useState("");
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const [downloadingId, setDownloadingId] = useState<string | null>(null);

    async function lookup() {
        setLoading(true);
        setErr(null);
        setItems([]);

        try {
            const res = await fetch("/api/purchases/list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error(await res.text());

            const data = (await res.json()) as { items: Item[] };
            setItems(data.items || []);

            if (!data.items?.length) {
                setErr("No purchases found for that email.");
            }
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : String(e);
            setErr(message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    async function download(productId: string, rowId: string) {
        setDownloadingId(rowId);
        setErr(null);

        try {
            const res = await fetch("/api/downloads/signed", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, productId }),
            });

            if (!res.ok) throw new Error(await res.text());

            const data = (await res.json()) as { url: string };
            window.location.href = data.url;
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : String(e);
            setErr(message || "Could not generate download link.");
        } finally {
            setDownloadingId(null);
        }
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-16">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Downloads</h1>
            <p className="mt-2 text-sm text-zinc-600">
                Enter the email you used at checkout. We’ll show your available downloads.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                    className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                />
                <button
                    type="button"
                    onClick={lookup}
                    disabled={!email || loading}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
                >
                    {loading ? "Checking…" : "Find purchases"}
                </button>
            </div>

            {err && (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {err}
                </div>
            )}

            {items.length > 0 && (
                <div className="mt-8 rounded-2xl border border-zinc-200 bg-white">
                    <div className="border-b border-zinc-200 px-5 py-4">
                        <p className="text-sm font-semibold text-zinc-900">Your downloads</p>
                        <p className="mt-1 text-xs text-zinc-500">
                            Links are secure and expire after a short time.
                        </p>
                    </div>

                    <div className="divide-y divide-zinc-200">
                        {items.map((it) => (
                            <div key={it.id} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <div className="text-sm font-semibold text-zinc-900">{it.name}</div>
                                    <div className="mt-1 text-xs text-zinc-500">
                                        Purchased: {new Date(it.createdAt).toLocaleString()}
                                    </div>
                                </div>

                                <button
                                    onClick={() => download(it.productId, it.id)}
                                    disabled={downloadingId === it.id}
                                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 disabled:opacity-60"
                                >
                                    {downloadingId === it.id ? "Preparing…" : "Download"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-10 text-xs text-zinc-500">
                Need help? Email{" "}
                <a className="underline" href="mailto:info@wizdomenterprizes.com">
                    info@wizdomenterprizes.com
                </a>
            </div>
        </main>
    );
}