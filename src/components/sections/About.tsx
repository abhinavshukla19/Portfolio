import { site } from '@/data/site'
import { skillGroups } from '@/data/skills'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SplitText } from '@/components/ui/SplitText'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectImage } from '@/components/ui/ProjectImage'

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="03" label="About" title="Who is doing the typing." />

        <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.45fr)] md:gap-20">
          {/* Portrait — desaturated so it sits in the palette rather than
              fighting it, with an offset accent block behind for depth. */}
          <Reveal>
            <figure className="mx-auto w-full max-w-xs md:mx-0 md:max-w-none">
              {/* The accent block is scoped to this wrapper, not the whole
                  figure — inset-0 on the figure put it behind the caption too,
                  leaving faint text on a vermilion field. */}
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                <div
                  className="relative overflow-hidden rounded-sm"
                  style={{ border: '1px solid var(--rule)' }}
                >
                  <ProjectImage
                    base="/images/portrait"
                    alt="Abhinav Shukla"
                    sizes="(max-width: 768px) 320px, 420px"
                    className="block w-full grayscale contrast-[1.08]"
                  />
                </div>
              </div>
              <figcaption
                className="mt-8 flex justify-between font-mono text-[10px] tracking-[0.18em] uppercase"
                style={{ color: 'var(--fg-faint)' }}
              >
                <span>{site.name}</span>
                <span>{site.location}</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Bio */}
          <div className="md:pt-1">
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
              <dl
                className="mt-12 grid grid-cols-2 gap-px sm:grid-cols-4"
                style={{ backgroundColor: 'var(--rule)' }}
              >
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
        </div>

        {/* Toolkit — full width beneath, so the groups get room to breathe */}
        <Reveal delay={0.1}>
          <div className="mt-20 md:mt-28">
            <p
              className="mb-8 border-t pt-4 font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ borderColor: 'var(--rule)', color: 'var(--fg-faint)' }}
            >
              Toolkit
            </p>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {skillGroups.map((group) => (
                <div key={group.id} className="min-w-0">
                  <dt className="flex items-baseline gap-3">
                    <span
                      className="font-mono text-[10px] tracking-widest"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {group.index}
                    </span>
                    <span
                      className="font-mono text-[11px] tracking-[0.18em] uppercase"
                      style={{ color: 'var(--fg-faint)' }}
                    >
                      {group.label}
                    </span>
                  </dt>
                  <dd className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <p key={item} className="text-sm md:text-base">
                        {item}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
