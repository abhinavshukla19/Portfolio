import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/** Fades and lifts a block once, the first time it enters the viewport. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
