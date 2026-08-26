import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Github, Plus } from 'lucide-react'
import { projects, type Project } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectImage } from '@/components/ui/ProjectImage'
import { Reveal } from '@/components/ui/Reveal'

export function Work() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null)

  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="01"
          label="Selected work"
          title="Four problems, four shapes."
          lede="A storefront, a streaming catalogue, a live-sync editor and an offline document tool. Different constraints each time — which is the point."
        />

        <ul style={{ borderTop: '1px solid var(--rule)' }}>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              position={i}
              open={openId === project.id}
              onToggle={() => setOpenId((cur) => (cur === project.id ? null : project.id))}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

type ProjectRowProps = {
  project: Project
  position: number
  open: boolean
  onToggle: () => void
}

function ProjectRow({ project, position, open, onToggle }: ProjectRowProps) {
  const reduced = useReducedMotion()
  const panelId = useId()

  return (
    <li style={{ borderBottom: '1px solid var(--rule)' }}>
      <Reveal delay={position * 0.06}>
        <h3>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-7 text-left md:gap-8 md:py-10"
          >
            <span
              className="font-mono text-[11px] tracking-widest tabular-nums"
              style={{ color: open ? 'var(--color-accent)' : 'var(--fg-faint)' }}
            >
              {project.index}
            </span>

            <span className="min-w-0">
              <span
                className="font-display block text-[clamp(1.9rem,5.5vw,4rem)] leading-[1.02] tracking-[-0.02em] transition-colors"
                style={{ color: open ? 'var(--color-accent)' : 'var(--fg)' }}
              >
                {project.title}
              </span>
              <span
                className="mt-1.5 block max-w-md text-sm leading-snug md:text-base"
                style={{ color: 'var(--fg-muted)' }}
              >
                {project.pitch}
              </span>
            </span>

            <span className="flex items-center gap-4 md:gap-7">
              <span
                className="hidden font-mono text-[11px] tracking-widest tabular-nums sm:inline"
                style={{ color: 'var(--fg-faint)' }}
              >
                {project.year}
              </span>
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full border transition-colors md:size-11"
                style={{
                  borderColor: open ? 'var(--color-accent)' : 'var(--rule)',
                  backgroundColor: open ? 'var(--color-accent)' : 'transparent',
                }}
              >
                <Plus
                  size={16}
                  className="transition-transform duration-500"
                  style={{
                    transform: open ? 'rotate(135deg)' : 'none',
                    color: open ? 'var(--color-paper)' : 'var(--fg)',
                  }}
                />
              </span>
            </span>
          </button>
        </h3>
      </Reveal>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-12 md:grid-cols-[1.1fr_1fr] md:gap-14 md:pb-16">
              <div
                className="relative order-2 overflow-hidden rounded-lg md:order-1"
                style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--rule)' }}
              >
                {project.image ? (
                  <ProjectImage
                    base={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="grid aspect-[16/10] place-items-center"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}22, transparent 65%)`,
                    }}
                  >
                    <span
                      className="font-display text-[clamp(3rem,9vw,7rem)] leading-none opacity-25"
                      style={{ color: project.accent }}
                    >
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="order-1 flex flex-col gap-7 md:order-2 md:pt-2">
                <p className="max-w-prose leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  {project.summary}
                </p>

                <div>
                  <p
                    className="mb-2 font-mono text-[10px] tracking-[0.22em] uppercase"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    The hard part
                  </p>
                  <p className="max-w-prose leading-relaxed">{project.hardPart}</p>
                </div>

                <dl className="font-mono text-[11px]">
                  {project.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex justify-between gap-6 border-t py-2"
                      style={{ borderColor: 'var(--rule)' }}
                    >
                      <dt className="tracking-[0.14em] uppercase" style={{ color: 'var(--fg-faint)' }}>
                        {fact.label}
                      </dt>
                      <dd className="text-right">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide"
                      style={{ borderColor: 'var(--rule)', color: 'var(--fg-muted)' }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}
                    >
                      Live site
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : null}
                  {project.repos.map((repo) => (
                    <a
                      key={repo.href}
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:border-[var(--fg)]"
                      style={{ borderColor: 'var(--rule)' }}
                    >
                      <Github size={14} />
                      {repo.label}
                    </a>
                  ))}
                  {project.liveNote ? (
                    <p
                      className="self-center font-mono text-[10px] tracking-[0.16em] uppercase"
                      style={{ color: 'var(--fg-faint)' }}
                    >
                      {project.liveNote}
                    </p>
                  ) : null}
                </div>

                {project.demo ? (
                  <p
                    className="font-mono text-[11px] leading-relaxed"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    <span className="tracking-[0.16em] uppercase">Demo login</span>{' '}
                    <span style={{ color: 'var(--fg)' }}>{project.demo.email}</span>
                    {' · '}
                    <span style={{ color: 'var(--fg)' }}>{project.demo.password}</span>
                  </p>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  )
}
