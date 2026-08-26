import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection, setScrollLocked } from '@/hooks/useLenis'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import type { Theme } from '@/hooks/useTheme'

const SECTIONS = ['home', 'work', 'path', 'about', 'contact'] as const
const LABELS: Record<(typeof SECTIONS)[number], string> = {
  home: 'Index',
  work: 'Work',
  path: 'Path',
  about: 'About',
  contact: 'Contact',
}

type NavProps = { theme: Theme; onToggleTheme: () => void }

export function Nav({ theme, onToggleTheme }: NavProps) {
  const active = useActiveSection(SECTIONS)
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    setScrollLocked(open)
    return () => setScrollLocked(false)
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <a
        href="#work"
        onClick={(e) => {
          e.preventDefault()
          go('work')
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
      >
        Skip to content
      </a>

      <header
        data-theme-surface
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: 'var(--rule)',
          backgroundColor: 'color-mix(in oklab, var(--bg) 82%, transparent)',
        }}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              go('home')
            }}
            className="group flex items-baseline gap-2.5"
          >
            <span className="font-display text-xl leading-none md:text-2xl">{site.name}</span>
            <span
              className="hidden font-mono text-[10px] tracking-[0.2em] uppercase sm:inline"
              style={{ color: 'var(--fg-faint)' }}
            >
              {site.domain}
            </span>
          </a>

          <div className="flex items-center gap-1 md:gap-2">
            <ul className="hidden items-center gap-1 md:flex">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(id)
                    }}
                    aria-current={active === id ? 'true' : undefined}
                    className="relative block px-3 py-2 font-mono text-xs tracking-[0.16em] uppercase transition-colors"
                    style={{ color: active === id ? 'var(--fg)' : 'var(--fg-faint)' }}
                  >
                    {LABELS[id]}
                    {active === id ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-px h-px"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={site.resume}
              download
              className="ml-1 hidden rounded-full px-4 py-2 font-mono text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-80 md:inline-block"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
            >
              Résumé
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-[var(--rule)]"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-10 place-items-center md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    'absolute left-0 block h-px w-full transition-transform duration-300',
                    open ? 'top-1.5 rotate-45' : 'top-0',
                  )}
                  style={{ backgroundColor: 'var(--fg)' }}
                />
                <span
                  className={cn(
                    'absolute left-0 block h-px w-full transition-transform duration-300',
                    open ? 'top-1.5 -rotate-45' : 'top-3',
                  )}
                  style={{ backgroundColor: 'var(--fg)' }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            data-theme-surface
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
            style={{ backgroundColor: 'var(--bg)' }}
            initial={reduced ? undefined : { opacity: 0, y: -16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-2">
              {SECTIONS.map((id, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      go(id)
                    }}
                    className="font-display flex items-baseline gap-4 py-2 text-5xl leading-none"
                    style={{ color: active === id ? 'var(--color-accent)' : 'var(--fg)' }}
                  >
                    <span
                      className="font-mono text-xs tracking-widest"
                      style={{ color: 'var(--fg-faint)' }}
                    >
                      0{i + 1}
                    </span>
                    {LABELS[id]}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.resume}
              download
              className="mt-10 self-start rounded-full px-5 py-2.5 font-mono text-xs tracking-[0.14em] uppercase"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
            >
              Download résumé
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
