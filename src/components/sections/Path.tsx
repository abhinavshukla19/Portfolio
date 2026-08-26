import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { timeline, kindLabel, type TimelineEntry } from '@/data/timeline'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function Path() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="path" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="02"
          label="The path so far"
          title="Third year. Four apps. One internship."
          lede="Short career, dense one. Here it is in order, most recent first — no padding."
        />

        <div ref={ref} className="relative pl-7 md:pl-0">
          {/* Spine — drawn in as the section scrolls past. */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-0 w-px md:left-[19%]"
            style={{ backgroundColor: 'var(--rule)' }}
          >
            <motion.div
              className="h-full w-full origin-top"
              style={{
                backgroundColor: 'var(--color-accent)',
                scaleY: reduced ? 1 : scaleY,
              }}
            />
          </div>

          <ol className="space-y-14 md:space-y-20">
            {timeline.map((entry, i) => (
              <TimelineRow key={entry.id} entry={entry} position={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function TimelineRow({ entry, position }: { entry: TimelineEntry; position: number }) {
  return (
    <li className="relative md:grid md:grid-cols-[19%_1fr] md:gap-12">
      {/* Node */}
      <span
        aria-hidden
        className="absolute top-2 -left-[calc(1.75rem+4px)] size-2.5 rounded-full md:left-[calc(19%-5px)]"
        style={{
          backgroundColor: entry.kind === 'work' ? 'var(--color-accent)' : 'var(--bg)',
          border: '1px solid var(--color-accent)',
        }}
      />

      <Reveal delay={position * 0.05}>
        <div className="md:pr-10 md:text-right">
          <p
            className="font-mono text-[11px] tracking-[0.18em] uppercase"
            style={{ color: 'var(--fg-faint)' }}
          >
            {entry.period}
          </p>
          <p
            className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            {kindLabel[entry.kind]}
          </p>
        </div>
      </Reveal>

      <Reveal delay={position * 0.05 + 0.08}>
        <div className="mt-3 md:mt-0 md:pl-12">
          <h3 className="font-display text-[clamp(1.5rem,3.4vw,2.5rem)] leading-tight tracking-[-0.015em]">
            {entry.title}
          </h3>
          {entry.org ? (
            <p className="mt-1 text-sm" style={{ color: 'var(--color-accent)' }}>
              {entry.org}
            </p>
          ) : null}

          <p className="mt-4 max-w-prose leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            {entry.body}
          </p>

          {entry.detail?.length ? (
            <ul className="mt-5 space-y-2.5">
              {entry.detail.map((line) => (
                <li
                  key={line}
                  className="relative max-w-prose pl-5 text-sm leading-relaxed"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <span
                    aria-hidden
                    className="absolute top-[0.62em] left-0 h-px w-2.5"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          ) : null}

          {entry.tags?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide"
                  style={{ borderColor: 'var(--rule)', color: 'var(--fg-faint)' }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Reveal>
    </li>
  )
}
