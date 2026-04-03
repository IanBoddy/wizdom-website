import { ButtonLink, Container, Section, Card } from "@/components/ui";
import { LINKS } from "@/lib/links";
import Image from "next/image";
import type { Metadata } from "next";
import BuyNowButton from "@/components/BuyNowButton";

export const metadata: Metadata = {
    title: "Focus Blueprint™",
    description: "A complete personal operating system for clarity and execution.",
};

export default function FocusBlueprintPage() {
    return (
        <main>
            <Container>
                {/* HERO */}
                <section className="py-16">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        {/* LEFT */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                Flagship System
                            </p>

                            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                                Focus Blueprint™
                            </h1>

                            <p className="mt-3 text-sm font-medium text-zinc-700">
                                Start clear. Execute consistently. Stop wasting days.
                            </p>

                            {/* v1.3 BADGES */}
                            <div className="mt-4 inline-flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800">
                                    v1.3 update
                                </span>
                                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                                    Start Here (15 minutes)
                                </span>
                                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                                    7-day onboarding
                                </span>
                                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                                    6 printables
                                </span>
                                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                                    Optional AI Companion
                                </span>
                            </div>

                            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
                                A complete personal operating system for clarity and execution. Focus Blueprint helps
                                you stay organised, avoid wasted days and build real progress through simple,
                                structured systems you can actually stick to.
                            </p>

                            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                                <li>✅ 8 guided PDF workbooks (Modules 1–8)</li>
                                <li>✅ Daily / Weekly / Monthly execution system</li>
                                <li>✅ Pillars, priorities, goals, habits + dashboards</li>
                                <li>✅ Start Here (15-min setup) + 7-day onboarding</li>
                                <li>✅ 6 printable one-page focus sheets</li>
                                <li>✅ Optional AI Companion (personal-use decision support)</li>
                            </ul>

                            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
                                <p>
                                    <strong>Digital Download (ZIP):</strong> Excel spreadsheets + guided PDF workbooks.
                                </p>
                                <p className="mt-2">
                                    <strong>Compatibility:</strong> Excel recommended (best experience). Google Sheets works for dashboards + some templates.
                                </p>
                            </div>

                            {/* AI COMPANION MICRO-BLOCK */}
                            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700">
                                <p className="font-semibold text-zinc-900">Optional AI Companion (included)</p>
                                <p className="mt-2 text-sm text-zinc-600">
                                    A guided decision-support layer you can use when you’re stuck, scattered, or overwhelmed.
                                    Not an app. Not sold separately.
                                </p>
                                <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                                    <li>• Stuck choosing → Decision Clarity</li>
                                    <li>• Scattered → Focus Reset</li>
                                    <li>• Exhausted → Burnout Recovery</li>
                                </ul>
                            </div>

                            {/* PRIMARY CTA (DIRECT) */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <BuyNowButton productId="focus-blueprint">Buy now</BuyNowButton>
                                <ButtonLink href="/my-downloads" variant="secondary" external={false}>
                                    Downloads
                                </ButtonLink>
                                <ButtonLink href="/support" variant="secondary" external={false}>
                                    Support
                                </ButtonLink>
                            </div>

                            <p className="mt-3 text-xs text-zinc-500">
                                £39.99 • Instant download • Personal-use license.{" "}
                                <span className="text-zinc-400">Prefer marketplaces?</span>{" "}
                                <a className="underline" href={LINKS.etsyFocusBlueprint} target="_blank" rel="noreferrer">
                                    Etsy
                                </a>{" "}
                                ·{" "}
                                <a className="underline" href={LINKS.gumroadFocusBlueprint} target="_blank" rel="noreferrer">
                                    Gumroad
                                </a>
                            </p>

                            <p className="mt-4 text-xs text-zinc-500">
                                If you get stuck, email{" "}
                                <a className="underline break-words" href={`mailto:${LINKS.supportEmail}`}>
                                    {LINKS.supportEmail}
                                </a>{" "}
                                and we’ll help you set up.
                            </p>
                        </div>

                        {/* RIGHT (NEW MOCKUPS) */}
                        <div>
                            <Image
                                src="/focus/cover.png"
                                alt="Focus Blueprint cover"
                                width={1400}
                                height={1800}
                                className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm"
                                priority
                            />

                            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                Preview the system
                            </p>

                            <div className="mt-2 grid gap-4 md:grid-cols-2">
                                <Image
                                    src="/focus/stage1-2.png"
                                    alt="Stage 1: Clarity"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm"

                                />
                                <Image
                                    src="/focus/stage3.png"
                                    alt="Stage 3: Execution Modules"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm"
                                />
                                <Image
                                    src="/focus/FocusAI.png"
                                    alt="Internal AI Companion (optional)"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm"
                                />
                                <Image
                                    src="/focus/capacity.png"
                                    alt="Capacity-aware by design"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TRUST BLOCK */}
                    <div className="mt-10">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm break-words">
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Instant</p>
                                <p className="mt-2 text-sm font-semibold text-zinc-900">Instant download</p>
                                <p className="mt-1 text-sm text-zinc-600">ZIP delivered immediately after purchase.</p>
                            </div>

                            <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm break-words">
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Works With</p>
                                <p className="mt-2 text-sm font-semibold text-zinc-900">Excel + Sheets</p>
                                <p className="mt-1 text-sm text-zinc-600">
                                    Excel recommended. Dashboards + some templates work in Sheets.
                                </p>
                            </div>

                            <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm break-words">
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">License</p>
                                <p className="mt-2 text-sm font-semibold text-zinc-900">Personal use</p>
                                <p className="mt-1 text-sm text-zinc-600">Use for yourself. No reselling or redistribution.</p>
                            </div>

                            <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm break-words">
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Support</p>
                                <p className="mt-2 text-sm font-semibold text-zinc-900">Real help</p>
                                <p className="mt-1 text-sm text-zinc-600">
                                    Email{" "}
                                    <a className="underline break-words" href={`mailto:${LINKS.supportEmail}`}>
                                        {LINKS.supportEmail}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-zinc-500">
                            Note: this is a productivity system/template. Not medical, legal, or financial advice.
                        </p>
                    </div>
                </section>

                {/* SECTIONS */}
                <Section eyebrow="What it solves" title="Stop feeling scattered">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card title="Clarity">Replace mental noise with a clean structure for what matters now.</Card>
                        <Card title="Execution">Turn priorities into daily and weekly action without overwhelm.</Card>
                        <Card title="Tracking">Dashboards reveal patterns so you can adjust early.</Card>
                        <Card title="Identity alignment">Build consistency by aligning behaviour with who you’re becoming.</Card>
                    </div>
                </Section>

                <Section eyebrow="Included" title="What you get">
                    <div className="space-y-3 text-sm text-zinc-700">
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
                            <p className="font-semibold text-zinc-900">What’s new in v1.3</p>
                            <ul className="mt-3 space-y-1">
                                <li>• Start Here (15-minute setup)</li>
                                <li>• 7-Day onboarding mini-program</li>
                                <li>• 6 printable one-page sheets</li>
                                <li>• AI Companion (optional)</li>
                            </ul>
                        </div>

                        <ul className="grid gap-3 md:grid-cols-2">
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">
                                ✅ 8 guided PDF workbooks (Modules 1–8)
                            </li>
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">
                                ✅ Daily / Weekly / Monthly execution system
                            </li>
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">
                                ✅ Pillars, priorities, goals, habits + dashboards
                            </li>
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">
                                ✅ Start Here + personal-use license
                            </li>
                        </ul>

                        <p><strong>Stage 1 — Core OS:</strong> pillars, priorities, goals.</p>
                        <p><strong>Stage 2 — Dashboards:</strong> weekly tracking + trend notes (Sheets-ready).</p>
                        <p><strong>Stage 3 — Execution Modules:</strong> daily/weekly/monthly execution.</p>
                        <p><strong>Guided Workbooks (Modules 1–8):</strong> premium PDFs that walk you through the system.</p>
                        <p><strong>Start Here + License:</strong> onboarding + personal-use license included.</p>
                    </div>
                </Section>

                <Section eyebrow="How to start" title="Choose one path">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card title="Clarity Path">
                            Start with Stage 1 + Module 1 (Life Pillars) + Module 7 (Priorities).
                        </Card>
                        <Card title="Execution Path">
                            Start with Stage 3 Daily + Weekly modules for immediate momentum.
                        </Card>
                        <Card title="Tracking Path">
                            Add Stage 2 dashboards when you want visual feedback and trends.
                        </Card>
                    </div>
                </Section>

                <Section eyebrow="FAQ" title="Quick answers">
                    <div className="space-y-4">
                        <details className="rounded-2xl border border-zinc-200 p-5">
                            <summary className="cursor-pointer text-sm font-semibold">
                                Do I have to use everything?
                            </summary>
                            <p className="mt-3 text-sm text-zinc-600">
                                No. Focus Blueprint is modular. Use only what you need.
                            </p>
                        </details>

                        <details className="rounded-2xl border border-zinc-200 p-5">
                            <summary className="cursor-pointer text-sm font-semibold">
                                What do I need to run it?
                            </summary>
                            <p className="mt-3 text-sm text-zinc-600">
                                Excel is recommended. Dashboards are designed for Google Sheets. PDFs open in any reader.
                            </p>
                        </details>

                        <details className="rounded-2xl border border-zinc-200 p-5">
                            <summary className="cursor-pointer text-sm font-semibold">Support?</summary>
                            <p className="mt-3 text-sm text-zinc-600">
                                Email{" "}
                                <a className="underline break-words" href={`mailto:${LINKS.supportEmail}`}>
                                    {LINKS.supportEmail}
                                </a>{" "}
                                if you hit any issues.
                            </p>
                        </details>
                    </div>
                </Section>

                {/* MICRO FREEBIE */}
                <Section eyebrow="Not ready yet?" title="Get the free Focus micro-freebie">
                    <div className="grid gap-6 md:grid-cols-[2fr,1.5fr] md:items-start">
                        <div className="space-y-3 text-sm text-zinc-700">
                            <p>
                                Start small. The Focus micro-freebie gives you a simple daily focus sheet and weekly reset so you can
                                get wins immediately—without overwhelm.
                            </p>
                            <p className="text-xs text-zinc-500">
                                You can upgrade to the full Focus Blueprint when you’re ready for the complete operating system.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                            <div className="ml-embedded" data-form="hqZXA8"></div>
                            <p className="mt-2 text-[11px] text-zinc-500">
                                No spam. Just tools, ideas and updates to help you get more from your time.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* FINAL CTA */}
                <section className="pb-20">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                        <h3 className="text-base font-semibold">Ready?</h3>
                        <p className="mt-2 text-sm text-zinc-600">
                            Download instantly. Start in ~15 minutes. Build momentum this week.
                        </p>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <BuyNowButton productId="focus-blueprint">Buy now</BuyNowButton>
                            <ButtonLink href="/my-downloads" variant="secondary" external={false}>
                                Downloads
                            </ButtonLink>
                        </div>

                        <p className="mt-3 text-xs text-zinc-500">
                            Prefer marketplaces?{" "}
                            <a className="underline" href={LINKS.etsyFocusBlueprint} target="_blank" rel="noreferrer">
                                Etsy
                            </a>{" "}
                            ·{" "}
                            <a className="underline" href={LINKS.gumroadFocusBlueprint} target="_blank" rel="noreferrer">
                                Gumroad
                            </a>
                        </p>
                    </div>
                </section>
            </Container>
        </main>
    );
}