import { useEffect } from 'react'
import Lenis from 'lenis'

let instance: Lenis | null = null

/** Momentum scrolling, disabled outright when the visitor asks for less motion. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    instance = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      instance = null
    }
  }, [])
}

/** Scrolls to a section id, going through Lenis when it is running. */
export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  if (instance) {
    instance.scrollTo(target, { offset: 0, duration: 1.2 })
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/** Locks page scroll while a dialog is open. */
export function setScrollLocked(locked: boolean) {
  if (instance) {
    if (locked) instance.stop()
    else instance.start()
  }
  document.body.style.overflow = locked ? 'hidden' : ''
}
