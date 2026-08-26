import { site } from '@/data/site'
import { skillGroups } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SplitText } from '@/components/ui/SplitText'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="03" label="About" title="Who is doing the typing." />

        <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:gap-20">
          <div>
            <SplitText
              as="p"
              text="I like the parts other people skip."
              className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08] tracking-[-0.02em]"
            />

            <Reveal delay={0.1}>
              <div
                className="mt-8 space-y-5 text-base leading-relaxed md:text-lg"
                style={{ color: 'var(--fg-muted)' }}
              >
                <p>
                  The bug that only appears after a refresh. The shadow falling across a scanned
                  page. The six-digit code that has to land before anyone gets in. Those are the
                  problems worth sitting with — they are where the actual engineering hides.
                </p>
                <p>
                  I&apos;m a third-year Computer Science student at D. Y. Patil International
                  University in Pune, specialising in cloud computing. Most of what I know came from
                  shipping rather than lectures: four applications planned, coded and deployed on my
                  own, plus three months at Infotact Solutions building a point-of-sale and
                  inventory system and a food delivery platform.
                </p>
                <p style={{ color: 'var(--fg)' }}>
                  I work on both sides of the stack, and I finish things — from a blank screen
                  through to a live URL.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-12 grid grid-cols-2 gap-px sm:grid-cols-4" style={{ backgroundColor: 'var(--rule)' }}>
                {site.stats.map((stat) => (
                  <div key={stat.label} className="p-4" style={{ backgroundColor: 'var(--bg)' }}>
                    <dt
                      className="font-display text-[clamp(2rem,4vw,2.9rem)] leading-none"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {stat.value}
                    </dt>
                    <dd
                      className="mt-2 font-mono text-[10px] leading-snug tracking-[0.14em] uppercase"
                      style={{ color: 'var(--fg-faint)' }}
                    >
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Skills index */}
          <Reveal delay={0.12}>
            <div className="md:pt-3">
              <p
                className="mb-6 font-mono text-[10px] tracking-[0.22em] uppercase"
                style={{ color: 'var(--fg-faint)' }}
              >
                Toolkit
              </p>
              <dl>
                {skillGroups.map((group) => (
                  <div
                    key={group.id}
                    className="grid grid-cols-[auto_1fr] gap-x-4 border-t py-5 md:gap-x-6"
                    style={{ borderColor: 'var(--rule)' }}
                  >
                    <dt className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--color-accent)' }}>
                      {group.index}
                    </dt>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: 'var(--fg-faint)' }}>
                        {group.label}
                      </p>
                      <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                        {group.items.map((item) => (
                          <span key={item} className="text-sm md:text-base">
                            {item}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
