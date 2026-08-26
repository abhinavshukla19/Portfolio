import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'
import { useRef } from 'react'

type MagneticLinkProps = {
  children: ReactNode
  href: string
  className?: string
  style?: CSSProperties
  /** How far the element is allowed to drift toward the cursor, in px. */
  strength?: number
  external?: boolean
  onClick?: () => void
}

/**
 * A link that leans toward the cursor while hovered. Pointer-driven only —
 * it never moves for keyboard users or when reduced motion is requested.
 */
export function MagneticLink({
  children,
  href,
  className,
  style,
  strength = 14,
  external = false,
  onClick,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / (rect.width / 2)) * strength)
    y.set((relY / (rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ ...style, x: springX, y: springY }}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </motion.a>
  )
}
