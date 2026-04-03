import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { LINKS } from "@/lib/links";
import BuyNowButton from "@/components/BuyNowButton";
import { PRODUCTS } from "@/lib/products";

export default function ProductsPage() {
    const live = PRODUCTS.filter((p) => p.status === "live");
    const coming = PRODUCTS.filter((p) => p.status !== "live");

    return (
        <main className="bg-slate-50 py-16 dark:bg-slate-950">
            <Container>
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                                Products
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                                The Wizdom toolkit.
                            </h1>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                                Systems and templates designed for clarity → execution → results.
                            </p>
                        </div>

                        <ButtonLink href="/my-downloads" variant="secondary" external={false}>
                            Downloads
                        </ButtonLink>
                    </div>

                    <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-slate-900 dark:text-zinc-300">
                        <p>
                            Looking for setup support, coaching, or custom work? Explore <Link href="/services" className="font-semibold underline">Services</Link> for help beyond downloads.
                        </p>
                    </div>

                    {/* LIVE */}
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {live.map((p) => (
                            <div
                                key={p.id}
                                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-slate-900"
                            >
                                <div className="relative aspect-[4/3] w-full bg-zinc-50 dark:bg-slate-950">
                                    {p.image?.src ? (
                                        <Image
                                            src={p.image.src}
                                            alt={p.image.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-cover"
                                            priority={p.id === "focus-blueprint"}
                                        />
                                    ) : null}

                                    {p.badge ? (
                                        <div className="absolute left-4 top-4">
                                            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-slate-900 dark:text-zinc-200">
                                                {p.badge}
                                            </span>
                                        </div>
                                    ) : null}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.name}</h2>
                                        {p.priceText ? (
                                            <span className="text-sm font-semibold text-zinc-900 dark:text-white">{p.priceText}</span>
                                        ) : null}
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                        {p.description}
                                    </p>

                                    {p.highlights?.length ? (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {p.highlights.slice(0, 4).map((h) => (
                                                <span
                                                    key={h}
                                                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-slate-950 dark:text-zinc-200"
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <BuyNowButton productId={p.id}>Buy now</BuyNowButton>
                                        <ButtonLink href={p.href} variant="secondary" external={false}>
                                            View details
                                        </ButtonLink>
                                    </div>

                                    <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                                        Already bought?{" "}
                                        <a className="underline" href="/my-downloads">
                                            Downloads
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* COMING SOON */}
                    {coming.length ? (
                        <div className="mt-12">
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                                Coming soon
                            </h3>

                            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {coming.map((p) => (
                                    <div
                                        key={p.id}
                                        className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 shadow-sm dark:border-zinc-800 dark:bg-slate-900/60"
                                    >
                                        <div className="relative aspect-[4/3] w-full bg-zinc-50 dark:bg-slate-950" />

                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-3">
                                                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.name}</h2>
                                                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
                                                    Soon
                                                </span>
                                            </div>

                                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                                {p.description}
                                            </p>

                                            <div className="mt-6 flex flex-wrap gap-3">
                                                <ButtonLink href={p.href} variant="secondary" external={false}>
                                                    View
                                                </ButtonLink>
                                                <a
                                                    href={`mailto:${LINKS.supportEmail}`}
                                                    className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-slate-950 dark:text-zinc-100 dark:hover:bg-slate-900"
                                                >
                                                    Request
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </Container>
        </main>
    );
}