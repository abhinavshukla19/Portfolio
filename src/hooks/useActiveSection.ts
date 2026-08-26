import { useEffect, useState } from 'react'

/**
 * Tracks which section is in view.
 * v1 ran an unthrottled `scroll` listener that called getBoundingClientRect()
 * on every section on every scroll event; this does the same job with a single
 * IntersectionObserver and no scroll handler at all.
 */
export function useActiveSection(ids: readonly string[], rootMargin = '-45% 0px -50% 0px') {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return active
}
