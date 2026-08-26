import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { ArrowDownRight } from 'lucide-react'
import { site } from '@/data/site'
import { scrollToSection } from '@/hooks/useLenis'
import { MagneticLink } from '@/components/ui/MagneticLink'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const rise = {
    hidden: { y: '110%' },
    visible: (i: number) => ({
      y: '0%',
      transition: { duration: 1.1, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
    }),
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pt-28 pb-8 md:px-10 md:pt-32 md:pb-10"
    >
      {/* Top metadata rail */}
      <motion.div
        className="flex items-start justify-between font-mono text-[10px] tracking-[0.22em] uppercase md:text-xs"
        style={{ color: 'var(--fg-faint)' }}
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <span className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span
              className="absolute inline-flex size-full animate-ping rounded-full opacity-70"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <span
              className="relative inline-flex size-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </span>
          Open to work
        </span>
        <span className="hidden sm:inline">{site.location}</span>
        <span>© 2026</span>
      </motion.div>

      {/* Name */}
      <motion.div style={reduced ? undefined : { y, opacity }} className="my-auto py-10">
        {/* aria-label carries the name as one string; the two block spans below
            are split purely for the line break and the staggered reveal. */}
        <h1 className="font-display leading-[0.82] tracking-[-0.035em]" aria-label="Abhinav Shukla">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block text-[clamp(3.5rem,15.5vw,14rem)]"
              variants={rise}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              Abhinav
            </motion.span>
          </span>{' '}
          <span className="block overflow-hidden pb-[0.06em] md:pl-[12%]">
            <motion.span
              className="block text-[clamp(3.5rem,15.5vw,14rem)] italic"
              variants={rise}
              custom={1}
              initial="hidden"
              animate="visible"
              style={{ color: 'var(--color-accent)' }}
            >
              Shukla
            </motion.span>
          </span>
        </h1>
      </motion.div>

      {/* Bottom rail */}
      <motion.div
        className="grid gap-8 border-t pt-6 md:grid-cols-[1fr_auto] md:items-end md:gap-16"
        style={{ borderColor: 'var(--rule)' }}
        initial={reduced ? undefined : { opacity: 0, y: 20 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
          <p className="max-w-xs text-balance text-sm leading-relaxed md:text-base">
            {site.role} — {site.tagline}
          </p>
          <dl className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--fg-faint)' }}>
            <div className="flex justify-between border-b py-1.5" style={{ borderColor: 'var(--rule)' }}>
              <dt>Focus</dt>
              <dd style={{ color: 'var(--fg)' }}>Product engineering</dd>
            </div>
            <div className="flex justify-between border-b py-1.5" style={{ borderColor: 'var(--rule)' }}>
              <dt>Stack</dt>
              <dd style={{ color: 'var(--fg)' }}>React · TS · Node</dd>
            </div>
            <div className="flex justify-between py-1.5">
              <dt>Shipped</dt>
              <dd style={{ color: 'var(--fg)' }}>4 projects</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <MagneticLink
            href="#work"
            onClick={() => scrollToSection('work')}
            className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-mono text-xs tracking-[0.16em] uppercase transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
          >
            See the work
            <ArrowDownRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </MagneticLink>

          <MagneticLink
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-mono text-xs tracking-[0.16em] uppercase transition-colors hover:border-[var(--fg)]"
            style={{ borderColor: 'var(--rule)' }}
          >
            Get in touch
          </MagneticLink>
        </div>
      </motion.div>
    </section>
  )
}
