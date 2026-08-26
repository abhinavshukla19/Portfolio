import { motion, useReducedMotion } from 'motion/react'
import { Fragment } from 'react'
import { toWords } from '@/lib/utils'

type SplitTextProps = {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

/**
 * Word-by-word mask reveal — each word rises out of a clipped line box.
 * Renders as real text, so it stays selectable, and carries an aria-label
 * so screen readers get the sentence rather than a pile of fragments.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  as = 'span',
}: SplitTextProps) {
  const reduced = useReducedMotion()
  const words = toWords(text)
  const Tag = motion[as]

  if (reduced) {
    const Plain = as
    return <Plain className={className}>{text}</Plain>
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            aria-hidden
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}
          >
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {/* A real space *between* the masked boxes, so it renders as a word
              gap and survives into textContent — copy-paste and crawlers both
              need it. Inside the clipped box it would be cut off. */}
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}
