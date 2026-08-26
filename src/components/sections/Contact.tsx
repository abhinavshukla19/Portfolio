import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { site } from '@/data/site'
import { scrollToSection } from '@/hooks/useLenis'
import { SplitText } from '@/components/ui/SplitText'
import { Reveal } from '@/components/ui/Reveal'
import { MagneticLink } from '@/components/ui/MagneticLink'

export function Contact() {
  return (
    <footer id="contact" className="px-5 pt-24 pb-8 md:px-10 md:pt-36 md:pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="flex items-baseline gap-4 border-t pt-4 font-mono text-xs tracking-[0.22em] uppercase"
          style={{ borderColor: 'var(--rule)', color: 'var(--fg-faint)' }}
        >
          <span style={{ color: 'var(--color-accent)' }}>04</span>
          <span>Contact</span>
        </div>

        <SplitText
          as="h2"
          text="Currently open to work."
          className="font-display mt-6 max-w-4xl text-[clamp(2.5rem,8.5vw,7rem)] leading-[0.92] tracking-[-0.025em]"
        />

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: 'var(--fg-muted)' }}>
            Looking for internships and junior full-stack roles. If you have something that needs
            building end to end, I&apos;d like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-12 inline-flex max-w-full items-center gap-3 md:gap-6"
          >
            <span
              className="font-display truncate text-[clamp(1.4rem,5.2vw,4rem)] leading-none tracking-[-0.02em] underline decoration-1 underline-offset-[0.14em] transition-colors"
              style={{ textDecorationColor: 'var(--rule)' }}
            >
              {site.email}
            </span>
            <ArrowUpRight
              className="size-7 shrink-0 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 md:size-12"
              style={{ color: 'var(--color-accent)' }}
            />
          </a>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {site.socials
              .filter((s) => s.label !== 'Email')
              .map((social) => (
                <MagneticLink
                  key={social.label}
                  href={social.href}
                  external
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:border-[var(--fg)]"
                  style={{ borderColor: 'var(--rule)' }}
                >
                  {social.label}
                  <ArrowUpRight size={13} />
                </MagneticLink>
              ))}
            <MagneticLink
              href={site.resume}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
            >
              Résumé — PDF
            </MagneticLink>
          </div>
        </Reveal>

        {/* Colophon */}
        <div
          className="mt-20 flex flex-col gap-4 border-t pt-6 font-mono text-[10px] tracking-[0.18em] uppercase sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'var(--rule)', color: 'var(--fg-faint)' }}
        >
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="hidden sm:inline">{site.location}</span>
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 tracking-[0.18em] uppercase transition-colors hover:text-[var(--fg)]"
          >
            Back to top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
