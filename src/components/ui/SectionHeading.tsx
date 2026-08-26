import { SplitText } from './SplitText'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
  /** Optional line of standfirst copy under the title. */
  lede?: string
}

/** Numbered editorial section header: rule, mono index + label, display title. */
export function SectionHeading({ index, label, title, lede }: SectionHeadingProps) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal>
        <div
          className="flex items-baseline gap-4 border-t pt-4 font-mono text-xs tracking-[0.22em] uppercase"
          style={{ borderColor: 'var(--rule)', color: 'var(--fg-faint)' }}
        >
          <span style={{ color: 'var(--color-accent)' }}>{index}</span>
          <span>{label}</span>
        </div>
      </Reveal>

      <SplitText
        as="h2"
        text={title}
        className="font-display mt-6 text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.02em]"
      />

      {lede ? (
        <Reveal delay={0.15}>
          <p
            className="mt-6 max-w-xl text-balance text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--fg-muted)' }}
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
    </header>
  )
}
