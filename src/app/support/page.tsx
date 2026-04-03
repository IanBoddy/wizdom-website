import { Container } from "@/components/ui";
import { LINKS } from "@/lib/links";

export default function Support() {
    return (
        <>

            <main>
                <Container>
                    <section className="py-16">
                        <h1 className="text-3xl font-semibold tracking-tight">Support</h1>
                        <p className="mt-4 text-sm text-zinc-600">
                            If you need help with downloads, file access, or setup, email:
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            <a className="underline" href={`mailto:${LINKS.supportEmail}`}>
                                {LINKS.supportEmail}
                            </a>
                        </p>

                        <div className="mt-10 space-y-4 text-sm text-zinc-700">
                            <div className="rounded-2xl border border-zinc-200 p-5">
                                <p className="font-semibold">Common fixes</p>
                                <ul className="mt-2 list-disc pl-5 text-zinc-600">
                                    <li>Download all ZIP parts before extracting (if split).</li>
                                    <li>Use a desktop/laptop for best experience.</li>
                                    <li>Excel is recommended; dashboards are Sheets-ready.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>

        </>
    );
}
