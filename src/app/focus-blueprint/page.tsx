import { ButtonLink, Container, Section, Card } from "@/components/ui";
import { LINKS } from "@/lib/links";
import Image from "next/image";
import type { Metadata } from "next";

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
                                A blueprint for people who want more from their time.
                            </p>

                            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
                                A complete personal operating system for clarity and execution. Focus Blueprint
                                helps you stay organised, avoid wasted days and build real progress through simple,
                                structured systems you can actually stick to.
                            </p>

                            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                                <li>✅ 8 guided PDF workbooks (Modules 1–8)</li>
                                <li>✅ Daily / Weekly / Monthly execution templates</li>
                                <li>✅ Goals, habits, priorities, pillars, wealth system</li>
                                <li>✅ Start Here onboarding + personal-use license</li>
                            </ul>

                            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
                                <p>
                                    <strong>Digital Download (ZIP):</strong> Excel spreadsheets + guided PDF workbooks.
                                </p>
                                <p className="mt-2">
                                    <strong>Compatibility:</strong> Best on desktop Excel. Some templates work in Google Sheets.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <ButtonLink href={LINKS.etsyFocusBlueprint} variant="primary">
                                    Buy on Etsy
                                </ButtonLink>
                                <ButtonLink href={LINKS.gumroadFocusBlueprint} variant="secondary">
                                    Buy on Gumroad
                                </ButtonLink>
                            </div>

                            <p className="mt-4 text-xs text-zinc-500">
                                Instant download • If you get stuck, email{" "}
                                <a className="underline break-words" href={`mailto:${LINKS.supportEmail}`}>
                                    {LINKS.supportEmail}
                                </a>{" "}
                                and we’ll help you set up.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div>
                            <Image
                                src="/focus-blueprint/mock-hero.png"
                                alt="Focus Blueprint preview"
                                width={1200}
                                height={750}
                                className="w-full rounded-2xl border bg-white shadow-sm"
                                priority
                            />

                            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                Preview the system
                            </p>

                            <div className="mt-3 grid gap-6 md:grid-cols-2">
                                <Image
                                    src="/focus-blueprint/FocusBlueprintMock(2).png"
                                    alt="Preview 2"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border bg-white shadow-sm"
                                />
                                <Image
                                    src="/focus-blueprint/FocusBlueprintMock(3).png"
                                    alt="Preview 3"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border bg-white shadow-sm"
                                />
                                <Image
                                    src="/focus-blueprint/FocusBlueprintMock(4).png"
                                    alt="Preview 4"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border bg-white shadow-sm"
                                />
                                <Image
                                    src="/focus-blueprint/FocusBlueprintMock(1).png"
                                    alt="Preview 1"
                                    width={2000}
                                    height={1200}
                                    className="w-full rounded-2xl border bg-white shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TRUST BLOCK (full width under hero so it doesn't squash) */}
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
                                <p className="mt-1 text-sm text-zinc-600">Excel recommended. Dashboards are Sheets-ready.</p>
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
                                    <a className="underline break-words" href="mailto:info@wizdomenterprizes.com">
                                        info@wizdomenterprizes.com
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
                        <ul className="grid gap-3 md:grid-cols-2">
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">✅ 8 guided PDF workbooks (Modules 1–8)</li>
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">✅ Daily / Weekly / Monthly execution system</li>
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">✅ Goals, habits, priorities, life pillars, wealth templates</li>
                            <li className="rounded-xl border border-zinc-200 bg-white p-4">✅ Start Here guide + personal-use license</li>
                        </ul>

                        <p><strong>Stage 1 — Core OS:</strong> pillars, priorities, goals, wealth strategy.</p>
                        <p><strong>Stage 2 — Dashboards:</strong> life, goals, habits, weekly tracking (Sheets-ready).</p>
                        <p><strong>Stage 3 — Execution Modules:</strong> daily/weekly/monthly + goals/habits/priority/pillars/wealth.</p>
                        <p><strong>Guided Workbooks (Modules 1–8):</strong> premium PDFs that walk you through the system.</p>
                        <p><strong>Start Here + License:</strong> onboarding + personal-use license included.</p>
                    </div>
                </Section>

                <Section eyebrow="How to start" title="Choose one path">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card title="Clarity Path">Start with Stage 1 + Module 1 (Life Pillars) + Module 7 (Priorities).</Card>
                        <Card title="Execution Path">Start with Stage 3 Daily + Weekly modules for immediate momentum.</Card>
                        <Card title="Tracking Path">Add Stage 2 dashboards when you want visual feedback and trends.</Card>
                    </div>
                </Section>

                <Section eyebrow="FAQ" title="Quick answers">
                    <div className="space-y-4">
                        <details className="rounded-2xl border border-zinc-200 p-5">
                            <summary className="cursor-pointer text-sm font-semibold">Do I have to use everything?</summary>
                            <p className="mt-3 text-sm text-zinc-600">No. Focus Blueprint is modular. Use only what you need.</p>
                        </details>

                        <details className="rounded-2xl border border-zinc-200 p-5">
                            <summary className="cursor-pointer text-sm font-semibold">What do I need to run it?</summary>
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

                {/* MICRO FREEBIE (MailerLite embed lives here) */}
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
                            Download instantly and start with the Start Here guide.
                        </p>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <ButtonLink href={LINKS.etsyFocusBlueprint} variant="primary">
                                Buy on Etsy
                            </ButtonLink>
                            <ButtonLink href={LINKS.gumroadFocusBlueprint} variant="secondary">
                                Buy on Gumroad
                            </ButtonLink>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}
