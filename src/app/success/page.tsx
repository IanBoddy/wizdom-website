import Link from "next/link";

export default function SuccessPage() {
    return (
        <main className="mx-auto max-w-2xl px-4 py-16">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Payment successful ✅
            </h1>

            <p className="mt-3 text-sm text-zinc-600">
                Your purchase is confirmed. Your download is available now.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/my-downloads"
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                    Go to Downloads
                </Link>

                <Link
                    href="/focus-blueprint"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                    Back to Focus Blueprint
                </Link>
            </div>

            <p className="mt-8 text-xs text-zinc-500">
                If you used the wrong email at checkout, contact support and we’ll fix it.
            </p>
        </main>
    );
}