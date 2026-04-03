import Link from "next/link";
import { Container } from "@/components/ui";
import { LINKS } from "@/lib/links";

export default function ServicesPage() {
    return (
        <main className="bg-slate-50 py-16 dark:bg-slate-950">
            <Container>
                <div className="mx-auto max-w-5xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Services
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                        Practical systems support and coaching.
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                        Get support with planning, product implementation, and focused execution. These services are designed to help you turn templates and systems into real progress.
                    </p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-slate-900">
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Strategy & setup</h2>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                Clarify your priority workflows, implement a structure that fits your business, and get a practical plan that you can use immediately.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-slate-900">
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Coaching & accountability</h2>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                Work with a coach to stay accountable, improve decision-making, and make faster progress with your Focus Blueprint system.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-slate-900">
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Templates & customisation</h2>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                Need bespoke work? We can adapt templates, spreadsheets, and workflows to fit your exact needs and help you deploy them smoothly.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-slate-900">
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Support & follow-up</h2>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                Get ongoing support for downloads, product setup, or any issues that come up while you use your new systems.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-slate-900 dark:text-zinc-300">
                        <p className="text-base font-semibold text-zinc-900 dark:text-white">Ready to work together?</p>
                        <p className="mt-3">
                            Email <a className="underline" href={`mailto:${LINKS.supportEmail}`}>{LINKS.supportEmail}</a> with a brief summary of your goals, and we’ll reply with the best next step.
                        </p>
                    </div>

                    <div className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
                        <p>
                            Prefer self-serve products? Visit <Link href="/products" className="font-semibold underline">Products</Link> for templates, downloads, and Focus Blueprint.
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}
