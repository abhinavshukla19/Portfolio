import { useLenis } from '@/hooks/useLenis'
import { useTheme } from '@/hooks/useTheme'
import { Nav } from '@/components/layout/Nav'
import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Path } from '@/components/sections/Path'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Grain } from '@/components/ui/Grain'
import { Marquee } from '@/components/ui/Marquee'
import { marqueeSkills } from '@/data/skills'

export default function App() {
  const { theme, toggle } = useTheme()
  useLenis()

  return (
    <>
      <Grain />
      <Nav theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />

        <div
          className="border-y py-5 md:py-7"
          style={{ borderColor: 'var(--rule)' }}
        >
          <Marquee items={marqueeSkills} duration={38} />
        </div>

        <Work />
        <Path />
        <About />
      </main>

      <Contact />
    </>
  )
}
