import { ButtonLink, Card, Container, Section } from "@/components/ui";
import { LINKS } from "@/lib/links";
import BuyNowButton from "@/components/BuyNowButton";
import AnimatedLogo from "@/components/AnimatedLogo";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  const focus = PRODUCTS.find((p) => p.id === "focus-blueprint");

  return (
    <main>
      <Container>
        {/* LOGO BAND (under nav) */}
        <section className="pt-10 md:pt-12">
          <div className="flex justify-center">
            <AnimatedLogo size={280} />
          </div>
        </section>

        {/* HERO */}
        <section className="py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Digital-first systems
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Digital systems for clarity → execution → results.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            Wizdom Enterprizes builds practical operating systems, templates, and AI toolkits for
            people who want structure over hype.
          </p>

          {/* VALUE SIGNALS */}
          {focus?.highlights?.length ? (
            <div className="mt-6 inline-flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800">
                {focus.badge ? `${focus.badge}: ${focus.name}` : `Featured: ${focus.name}`}
              </span>

              {focus.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                >
                  {h}
                </span>
              ))}

              {focus.priceText && (
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                  {focus.priceText}
                </span>
              )}
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BuyNowButton productId="focus-blueprint">Buy now</BuyNowButton>

            <ButtonLink href={focus?.href || "/focus-blueprint"} variant="secondary" external={false}>
              View Focus Blueprint
            </ButtonLink>

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

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
            <p>
              <strong>Focus Blueprint™</strong> is a digital download (ZIP): Excel spreadsheets + guided PDF
              workbooks + printables + onboarding. Desktop/laptop recommended. Not an app.
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              Note: This is a productivity system/template. Not medical, legal, or financial advice.
            </p>
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
        <Section eyebrow="Featured" title={focus?.name || "Focus Blueprint™"}>
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-sm leading-6 text-zinc-600">
                {focus?.description ||
                  "A complete personal operating system for clarity and execution — built to get you started fast. Modular by design: use only what you need."}
              </p>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700">
                <p className="font-semibold text-zinc-900">What’s new (v1.3)</p>
                <ul className="mt-3 space-y-1">
                  <li>• Start Here (15-minute setup)</li>
                  <li>• 7-day onboarding mini-program</li>
                  <li>• 6 printable one-page sheets</li>
                  <li>• Optional AI Companion for decision support</li>
                </ul>
              </div>

              <ul className="space-y-2 text-sm text-zinc-700">
                <li>• Stage 1: Core OS (pillars + priorities + goals)</li>
                <li>• Stage 2: Dashboards (momentum + pattern tracking)</li>
                <li>• Stage 3: Execution system (daily/weekly/monthly)</li>
                <li>• 8 guided workbook modules (PDF)</li>
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <BuyNowButton productId="focus-blueprint">Buy now</BuyNowButton>
                <ButtonLink href={focus?.href || "/focus-blueprint"} variant="secondary" external={false}>
                  View details
                </ButtonLink>
              </div>

              <p className="text-xs text-zinc-500">
                Already bought?{" "}
                <a className="underline" href="/my-downloads">
                  Go to Downloads
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">How it works</p>

              <div className="mt-4 space-y-3 text-sm text-zinc-700">
                <div className="rounded-xl bg-zinc-50 p-4">
                  <strong>Start</strong> → Complete the Start Here setup in ~15 minutes.
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <strong>Decide</strong> → Pillars, priorities, direction.
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <strong>Execute</strong> → Daily + Weekly systems (simple, repeatable).
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <strong>Track</strong> → Dashboards reveal patterns early.
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <strong>Adjust</strong> → Weekly/monthly review keeps you aligned.
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                <p className="font-semibold text-zinc-900">Optional AI Companion (included)</p>
                <p className="mt-2 text-sm text-zinc-600">
                  Use it when you’re stuck, scattered, or overwhelmed. Not an app. Not sold separately.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                  <li>• Stuck choosing → Decision Clarity</li>
                  <li>• Scattered → Focus Reset</li>
                  <li>• Exhausted → Burnout Recovery</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* FINAL CTA */}
        <section className="pb-20">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold">Ready to start?</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Download instantly. Start in ~15 minutes. Build momentum this week.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <BuyNowButton productId="focus-blueprint">Buy now</BuyNowButton>
              <ButtonLink href={focus?.href || "/focus-blueprint"} variant="secondary" external={false}>
                View Focus Blueprint
              </ButtonLink>
              <ButtonLink href="/my-downloads" variant="secondary" external={false}>
                Downloads
              </ButtonLink>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              If you get stuck, email{" "}
              <a className="underline break-words" href={`mailto:${LINKS.supportEmail}`}>
                {LINKS.supportEmail}
              </a>{" "}
              and we’ll help you set up.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}