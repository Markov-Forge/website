import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, Quote } from "lucide-react";
import { ForgeEmblem } from "@/components/forge-emblem";
import { Nav } from "@/components/nav";
import { RevealObserver } from "@/components/reveal-observer";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { UseCaseExplorer } from "@/components/use-case-explorer";
import { founder, practices, principles, processSteps, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main id="top" className="overflow-x-clip">
        <Hero />
        <StackMarquee />
        <Services />
        <UseCases />
        <Process />
        <Principles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div data-reveal className="max-w-3xl">
      <p className="font-mono text-xs tracking-[0.25em] text-flame uppercase">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate pt-28 pb-16 sm:pt-36 lg:pb-24">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute top-0 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-flame/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div
            data-reveal
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.2em] text-muted uppercase"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-flame opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-flame" />
            </span>
            {site.tagline}
          </div>

          <h1
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="mt-7 font-display text-[2.6rem] leading-[1.04] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We forge AI systems that <span className="text-forge">hold up in production.</span>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Consultancy and hands-on engineering for LLM agents, RAG, MLOps and cloud-native
            backends — from first prototype to an evaluated, observed system your team can own.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group bg-forge inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(255,122,0,0.7)] transition hover:shadow-[0_0_60px_-6px_rgba(255,122,0,0.9)]"
            >
              Start a project
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#use-cases"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              Explore use cases
            </a>
          </div>

          <dl
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {[
              ["20+", "years building enterprise systems"],
              ["10+", "years shipping production ML"],
              ["5", "practice areas, one team"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">{n}</dd>
                <dd className="mt-1 text-xs leading-snug text-dim sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-[12%] rounded-full border border-line" />
          <div className="absolute inset-[2%] rounded-full border border-dashed border-white/[0.05]" />
          <ForgeEmblem className="relative w-full" />
        </div>
      </div>
    </section>
  );
}

function StackMarquee() {
  const items = practices.flatMap((p) => p.skills.map((s) => ({ s, c: p.color })));
  return (
    <div
      className="relative border-y border-line bg-surface/60 py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
      aria-label="Technologies we work with"
    >
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-2.5 font-mono text-sm whitespace-nowrap text-slate-400"
          >
            <span className="size-1.5 rounded-full" style={{ backgroundColor: it.c }} />
            {it.s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeader
        eyebrow="Services"
        title={
          <>
            Five practices. <span className="text-muted">One engineering standard.</span>
          </>
        }
        intro="Advisory when you need a second opinion on architecture; a hands-on build team when you need it shipped. Every engagement spans the full stack an AI feature actually depends on."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {practices.map((p, i) => (
          <article
            key={p.id}
            data-reveal
            style={{ "--reveal-delay": `${(i < 2 ? i : i - 2) * 90}ms` } as React.CSSProperties}
            className={`card group overflow-hidden p-7 hover:-translate-y-1 hover:border-white/15 ${
              i < 2 ? "lg:col-span-3" : "lg:col-span-2"
            }`}
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
              style={{ backgroundColor: p.color }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: p.color }}
                >
                  0{i + 1} — {p.label}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-snug font-semibold text-white">
                {p.headline}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-white/[0.02] px-2.5 py-1 text-xs text-slate-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="relative border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Use cases"
          title={
            <>
              Where AI pays off — <span className="text-forge">and how we make it work.</span>
            </>
          }
          intro="The highest-leverage problems we see teams wrestle with, the reason they usually stall, and the engineering that gets them unstuck."
        />
        <div data-reveal className="mt-14">
          <UseCaseExplorer />
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeader
        eyebrow="Process"
        title={
          <>
            An engagement is a <span className="text-forge">state machine.</span>
          </>
        }
        intro="Four explicit states with clear exit criteria. Each one leaves you with artefacts you keep — and production feeds evidence back into the loop."
      />

      <div className="relative mt-16">
        <div aria-hidden="true" className="absolute top-[34px] right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-ember via-flame to-gold opacity-50 lg:block" />
        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.state}
              data-reveal
              style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
              className="relative"
            >
              <div className="relative z-10 mx-auto flex size-[68px] items-center justify-center rounded-full border border-flame/40 bg-ink shadow-[0_0_30px_-6px_rgba(255,122,0,0.55)]">
                <span className="font-mono text-sm font-semibold text-gold">{step.state}</span>
              </div>
              <div className="card mt-6 p-6">
                <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {step.outputs.map((o) => (
                    <li key={o} className="flex items-center gap-2 font-mono text-xs text-slate-400">
                      <span className="text-flame">→</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p data-reveal className="mt-8 text-center font-mono text-xs tracking-wider text-dim lg:text-right">
        ↺ S3 → S0 · production traffic becomes the next evaluation set
      </p>
    </section>
  );
}

function Principles() {
  return (
    <section className="relative border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="How we decide"
          title={
            <>
              Opinions earned <span className="text-muted">in production.</span>
            </>
          }
          intro="Every principle below is a real tradeoff made on a shipped system — not a slogan."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
              className="group bg-ink p-8 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-dim">/{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white transition-colors group-hover:text-gold">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="About"
            title={
              <>
                Founder-led. <span className="text-muted">Senior by default.</span>
              </>
            }
          />
          <div data-reveal className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Markov Forge is led by <span className="text-white">{founder.name}</span>,{" "}
              {founder.role.toLowerCase()}. {founder.bio}
            </p>
            <p>
              You work directly with the engineer designing your system — no hand-off from a sales
              team to a junior bench.
            </p>
          </div>
          <div data-reveal className="mt-8 flex gap-3">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              <LinkedInIcon className="size-4" /> LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              <GitHubIcon className="size-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="space-y-5">
          <div data-reveal className="card p-7">
            <p className="font-mono text-xs tracking-[0.2em] text-dim uppercase">Systems built at</p>
            <ul className="mt-5 divide-y divide-line">
              {founder.highlights.map((h) => (
                <li key={h.org} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
                  <span className="w-28 shrink-0 font-display font-semibold text-white">{h.org}</span>
                  <span className="text-sm leading-relaxed text-muted">{h.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={{ "--reveal-delay": `${(i + 1) * 100}ms` } as React.CSSProperties}
              className="card p-7"
            >
              <Quote className="size-5 text-flame" />
              <blockquote className="mt-3 leading-relaxed text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-medium text-white">{t.name}</span>
                <span className="text-dim"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div
        data-reveal
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-flame/25 bg-surface px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-flame/25 blur-[100px]" />
        <div className="relative">
          <Image
            src="/brand/markovforge-icon.svg"
            alt=""
            width={72}
            height={72}
            className="mx-auto rounded-2xl shadow-[0_0_50px_-10px_rgba(255,122,0,0.8)]"
          />
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Have a system worth <span className="text-forge">forging?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Tell us about the problem, the data, and the deadline. You’ll get a straight answer on
            what’s feasible and what it takes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry — Markov Forge")}`}
              className="group bg-forge inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(255,122,0,0.7)]"
            >
              <Mail className="size-4" /> Email us
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/40 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/25"
            >
              <LinkedInIcon className="size-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Image
          src="/brand/markovforge-logo.svg"
          alt={`${site.name} — ${site.tagline}`}
          width={960}
          height={280}
          className="h-auto w-64"
        />
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-5 text-muted">
            <a href={`mailto:${site.email}`} aria-label="Email" className="transition hover:text-white">
              <Mail className="size-5" />
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <LinkedInIcon className="size-5" />
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <GitHubIcon className="size-5" />
            </a>
          </div>
          <p className="text-sm text-dim">
            © {new Date().getFullYear()} {site.name} · markovforge.com
          </p>
        </div>
      </div>
    </footer>
  );
}
