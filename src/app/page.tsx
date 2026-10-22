import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { Terminal } from '@/components/terminal'
import { Spotlight } from '@/components/spotlight'
import { Reveal } from '@/components/reveal'
import { dayJob, dayJobIntro, featured, highlights, lab, links, now, offline, principles, projects, services, stack } from '@/content/site'

function SectionHead({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-4">
        <span className="text-volt">{index}</span> / {label}
      </p>
      <h2 className="section-title max-w-3xl">{title}</h2>
    </Reveal>
  )
}

function Hero() {
  return (
    <section className="shell relative pb-24 pt-36 md:pb-32 md:pt-44">
      <Reveal>
        <p className="eyebrow mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-bone-mute" />
          Akli Reguig · freelance software engineer · Paris
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
          I build backends.
          <br />
          <span className="text-bone-dim">Lately, </span>
          <span className="font-serif font-normal italic tracking-normal text-volt">agents</span>
          <span className="text-bone-dim"> too.</span>
        </h1>
      </Reveal>
      <div className="mt-12 grid items-start gap-14 md:mt-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:pt-4">
          <Reveal delay={160}>
            <p className="max-w-xl text-lg leading-relaxed text-bone-dim">
              Over ten years of Java, Spring and DevOps. These days, a lot of AI: MCP servers, skills and plugins for
              AI harnesses, shared memory for coding agents. Products that fix problems people actually have, built
              with the right tool for each job. Made for daily use, not for the demo.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-volt px-6 py-3 text-sm font-semibold text-ink-950 transition hover:shadow-[0_0_40px_rgba(212,255,63,0.35)]"
            >
              See what I build
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <a
              href={links.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3 text-sm font-medium text-bone transition hover:border-bone"
            >
              <Linkedin className="h-4 w-4" />
              Get in touch
            </a>
            <a href={links.github} aria-label="GitHub" className="ml-1 rounded-full p-2.5 text-bone-dim transition hover:bg-ink-800 hover:text-bone">
              <Github className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
        <Reveal delay={300} className="relative">
          <div aria-hidden className="absolute -inset-8 -z-10 rounded-[3rem] bg-volt/10 blur-3xl" />
          <Terminal />
        </Reveal>
      </div>
    </section>
  )
}

function Marquee() {
  const words = ['Agentic engineering', 'Java', 'MCP', 'Continuous delivery', 'Kubernetes', 'Spring AI', 'Test-first', 'Rust', 'AI harnesses', 'Cloud', 'Local LLMs', 'Products people use']
  return (
    <div className="relative overflow-hidden border-y border-ink-800 bg-ink-900/40 py-5" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6 font-mono text-sm text-bone-mute">
            {w}
            <span className="ml-12 text-volt/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950" />
    </div>
  )
}

function Services() {
  return (
    <section className="shell py-28 md:py-36">
      <SectionHead
        index="01"
        label="what I do"
        title={
          <>
            Solid backends, and agents that do <span className="font-serif font-normal italic text-volt">real</span> work.
          </>
        }
      />
      <div className="mb-16 grid gap-5 md:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="h-full rounded-3xl border border-ink-700 bg-ink-900/60 p-7">
              <p className="mb-4 font-mono text-xs text-volt">{p.kicker}</p>
              <h3 className="mb-2 text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="leading-relaxed text-bone-dim">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="border-t border-ink-800">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="group grid gap-4 border-b border-ink-800 py-8 transition-colors hover:bg-ink-900/40 md:grid-cols-[80px_1fr_1.3fr] md:gap-8 md:px-4 md:py-10">
              <span className="font-mono text-sm text-bone-mute transition-colors group-hover:text-volt">0{i + 1}</span>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{s.title}</h3>
              <div>
                <p className="leading-relaxed text-bone-dim">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectLinks({ href, repo }: { href?: string; repo?: string }) {
  return (
    <div className="flex items-center gap-2">
      {repo && (
        <a href={repo} aria-label="Source code" className="rounded-full border border-ink-700 p-2 text-bone-dim transition hover:border-bone hover:text-bone">
          <Github className="h-4 w-4" />
        </a>
      )}
      {href && (
        <a href={href} aria-label="Open" className="rounded-full border border-ink-700 p-2 text-bone-dim transition hover:border-volt hover:text-volt">
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="shell py-28 md:py-36">
      <SectionHead
        index="02"
        label="selected work"
        title={
          <>
            Things I built because I <span className="font-serif font-normal italic text-volt">needed</span> them.
          </>
        }
      />

      <Reveal>
        <Spotlight className="mb-5 overflow-hidden rounded-3xl border border-ink-700 bg-ink-900/60">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="chip border-volt/40 text-volt">open source · featured</span>
                <ProjectLinks href={featured.href} repo={featured.repo} />
              </div>
              <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">{featured.name}</h3>
              <p className="mt-2 font-serif text-xl italic text-bone-dim">Leaves pebbles so your coding agents find their way back.</p>
              <p className="mt-6 max-w-xl leading-relaxed text-bone-dim">{featured.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <pre className="overflow-x-auto rounded-2xl border border-ink-700 bg-ink-950/80 p-5 font-mono text-[12px] leading-relaxed text-bone-dim">
{`$ curl -fsSL …/install.sh | sh
$ petit-poucet setup
  ✓ claude code   ✓ copilot
  ✓ codex         ✓ cursor
  ✓ opencode      ✓ antigravity

`}<span className="text-volt">🪨 20 notes loaded</span>{`
## Preferences (all repos)
- commit-rules: never push
- never-read-secrets`}
              </pre>
              <p className="font-mono text-xs text-bone-mute">↳ {featured.note}</p>
            </div>
          </div>
        </Spotlight>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <Spotlight className="flex h-full flex-col rounded-3xl border border-ink-700 bg-ink-900/60 p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-medium tracking-tight">{p.name}</h3>
                <ProjectLinks href={p.href} repo={p.repo} />
              </div>
              <p className="mb-6 flex-1 leading-relaxed text-bone-dim">{p.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function DayJob() {
  return (
    <section id="day-job" className="shell py-28 md:py-36">
      <SectionHead
        index="03"
        label="day job"
        title={
          <>
            Renault, since 2019. <span className="font-serif font-normal italic text-volt">Six</span> chapters.
          </>
        }
      />
      <Reveal>
        <p className="-mt-6 mb-14 max-w-2xl text-lg leading-relaxed text-bone-dim">{dayJobIntro}</p>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-700 bg-ink-700 md:grid-cols-2 lg:grid-cols-3">
        {dayJob.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 80} className="h-full">
            <Spotlight className="flex h-full flex-col bg-ink-900 p-8 md:p-10">
              <span className="mb-6 font-mono text-xs text-volt">{c.when}</span>
              <h3 className="mb-3 text-2xl font-medium tracking-tight md:text-3xl">{c.title}</h3>
              <p className="mb-6 flex-1 leading-relaxed text-bone-dim">{c.body}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 80} className="h-full">
            <Spotlight className="flex h-full flex-col rounded-3xl border border-volt/25 bg-gradient-to-br from-volt/[0.06] to-transparent p-8 md:p-10">
              <span className="chip mb-6 self-start border-volt/40 text-volt">recent · 2026</span>
              <h3 className="mb-3 text-2xl font-medium tracking-tight md:text-3xl">{h.title}</h3>
              <p className="mb-6 flex-1 leading-relaxed text-bone-dim">{h.body}</p>
              <div className="flex flex-wrap gap-2">
                {h.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Lab() {
  return (
    <section id="lab" className="shell py-28 md:py-36">
      <SectionHead
        index="04"
        label="the lab"
        title={
          <>
            Experiments. Some ship, some <span className="font-serif font-normal italic text-volt">teach</span> me something.
          </>
        }
      />
      <Reveal>
        <p className="-mt-6 mb-14 max-w-2xl text-lg leading-relaxed text-bone-dim">
          I have a full-time mission. This is what happens on evenings and weekends, when an idea won&apos;t leave me
          alone. There are more than you&apos;d think.
        </p>
      </Reveal>
      <div className="border-t border-ink-800">
        {lab.map((x, i) => (
          <Reveal key={x.name} delay={i * 50}>
            <div className="group grid gap-2 border-b border-ink-800 py-7 transition-colors hover:bg-ink-900/40 md:grid-cols-[200px_1fr_60px] md:items-baseline md:gap-8 md:px-4">
              <span className="font-mono text-sm text-bone-mute transition-colors group-hover:text-volt">{x.name}</span>
              <span className="font-serif text-2xl italic leading-snug text-bone md:text-3xl">{x.what}</span>
              <span className="hidden font-mono text-xs text-bone-mute md:block md:text-right">{x.year}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-6 font-mono text-xs text-bone-mute">Most of these live in private repos. Ask me about them.</p>
      </Reveal>
    </section>
  )
}

function Now() {
  return (
    <section id="now" className="shell py-28 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHead
          index="05"
          label="now · october 2026"
          title={
            <>
              What I&apos;m <span className="font-serif font-normal italic text-volt">on</span> right now.
            </>
          }
        />
        <ul className="space-y-6 lg:pt-16">
          {now.map((n, i) => (
            <Reveal key={n} delay={i * 60}>
              <li className="flex gap-4 border-b border-ink-800 pb-6 text-xl leading-relaxed text-bone-dim">
                <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
                {n}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="shell py-28 md:py-36">
      <SectionHead
        index="06"
        label="toolbox"
        title={
          <>
            What I reach for, <span className="font-serif font-normal italic text-volt">most days</span>.
          </>
        }
      />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((s, i) => (
          <Reveal key={s.group} delay={i * 60} className="h-full bg-ink-900 p-8">
            <p className="eyebrow mb-6">{s.group}</p>
            <ul className="space-y-2.5">
              {s.items.map((it) => (
                <li key={it} className="text-bone">{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid gap-5 md:grid-cols-3">
        {offline.map((o, i) => (
          <Reveal key={o.title} delay={i * 80}>
            <div className="h-full rounded-3xl border border-dashed border-ink-700 p-8">
              <p className="eyebrow mb-3">off the keyboard</p>
              <h3 className="mb-3 font-serif text-3xl italic">{o.title}</h3>
              <p className="leading-relaxed text-bone-dim">{o.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="shell pb-32 pt-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-ink-700 bg-ink-900 px-8 py-20 text-center md:py-28">
          <div aria-hidden className="absolute left-1/2 top-full h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/20 blur-[120px]" />
          <p className="eyebrow mb-6">07 / contact</p>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Got a backend to fix, or a team that wants agents to do{' '}
            <span className="font-serif font-normal italic text-volt">more than autocomplete</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-bone-dim">Send a message on LinkedIn. Every one gets read, and answered.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={links.linkedin}
              className="inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-semibold text-ink-950 transition hover:shadow-[0_0_50px_rgba(212,255,63,0.4)]"
            >
              <Linkedin className="h-4 w-4" />
              Message me on LinkedIn
            </a>
            <a href={links.github} className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 font-medium transition hover:border-bone">
              <Github className="h-4 w-4" />
              github.com/areguig
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <DayJob />
      <Lab />
      <Now />
      <Stack />
      <Contact />
    </>
  )
}
