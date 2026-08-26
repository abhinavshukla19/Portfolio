import { motion, useReducedMotion } from 'motion/react'

type MarqueeProps = {
  items: readonly string[]
  /** Seconds for one full pass. Larger is slower. */
  duration?: number
  reverse?: boolean
  className?: string
}

/** Edge-to-edge scrolling ticker. Two copies of the track make the loop seamless. */
export function Marquee({ items, duration = 32, reverse = false, className }: MarqueeProps) {
  const reduced = useReducedMotion()
  const track = [...items, ...items]

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`} aria-hidden>
      <motion.div
        className="flex w-max shrink-0 items-center gap-10 whitespace-nowrap will-change-transform"
        animate={reduced ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none">{item}</span>
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
