import { Header, Footer } from "@/components/shell";
import { ButtonLink, Card, Container, Section } from "@/components/ui";
import { LINKS } from "@/lib/links";

export default function Home() {
  return (
    <>


      <main>
        <Container>
          {/* HERO */}
          <section className="py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Digital-first systems
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Digital systems for clarity → execution → results.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
              Wizdom Enterprizes builds practical operating systems, templates, and
              AI toolkits for people who want structure over hype.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={LINKS.etsyFocusBlueprint} variant="primary">
                Shop Focus Blueprint (Etsy)
              </ButtonLink>
              <ButtonLink href={LINKS.gumroadFocusBlueprint} variant="secondary">
                Buy on Gumroad
              </ButtonLink>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
              <strong>Focus Blueprint™</strong> is a digital download (ZIP): Excel
              spreadsheets + guided PDF workbooks. Desktop/laptop recommended. Not an app.
            </div>
          </section>

          {/* WHAT WE BUILD */}
          <Section eyebrow="What we build" title="Systems you can actually use">
            <div className="grid gap-4 md:grid-cols-3">
              <Card title="Operating Systems">
                Personal and business systems that turn confusion into clear action.
              </Card>
              <Card title="Templates & Tools">
                Clean, premium templates designed for execution, not decoration.
              </Card>
              <Card title="AI Toolkits">
                Practical AI workflows and prompts that create leverage and reduce busywork.
              </Card>
            </div>
          </Section>

          {/* FEATURED */}
          <Section eyebrow="Featured" title="Focus Blueprint™">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <p className="text-sm leading-6 text-zinc-600">
                  A complete personal operating system for priorities, goals, habits, and execution.
                  Modular by design—use only what you need.
                </p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li>• Stage 1: Core OS (clarity + priorities)</li>
                  <li>• Stage 2: Dashboards (momentum + alignment)</li>
                  <li>• Stage 3: Execution modules (daily/weekly/monthly)</li>
                  <li>• 8 guided workbook modules (PDF)</li>
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/focus-blueprint" variant="secondary" external={false}>
                    View details
                  </ButtonLink>
                  <ButtonLink href={LINKS.etsyFocusBlueprint} variant="primary">
                    Get it on Etsy
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">How it works</p>
                <div className="mt-4 space-y-3 text-sm text-zinc-700">
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <strong>Decide</strong> → Pillars, priorities, direction.
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <strong>Execute</strong> → Daily + Weekly systems.
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <strong>Track</strong> → Dashboards reveal patterns.
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <strong>Adjust</strong> → Review weekly/monthly.
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </main>


    </>
  );
}
