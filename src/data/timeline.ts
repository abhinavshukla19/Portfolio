export type TimelineKind = 'work' | 'education' | 'build' | 'award'

export type TimelineEntry = {
  id: string
  kind: TimelineKind
  period: string
  title: string
  org: string | null
  body: string
  /** Bullets for the entries that earn them. */
  detail?: readonly string[]
  tags?: readonly string[]
}

export const kindLabel: Record<TimelineKind, string> = {
  work: 'Work',
  education: 'Study',
  build: 'Built',
  award: 'Award',
}

export const timeline: readonly TimelineEntry[] = [
  {
    id: 'folio',
    kind: 'build',
    period: '2026',
    title: 'Folio',
    org: 'Personal project',
    body: 'A document toolkit with no backend at all — conversion, merging, photo editing and camera scanning, every operation running inside the tab.',
    tags: ['React', 'TypeScript', 'pdf-lib', 'Capacitor'],
  },
  {
    id: 'infotact',
    kind: 'work',
    period: 'May — Aug 2026',
    title: 'Software Development Intern',
    org: 'Infotact Solutions',
    body: 'Three months on real product work, shipping through Git branches and pull requests with a senior developer reviewing each merge.',
    detail: [
      'Built OmniPOS, a point-of-sale and inventory system covering sales, product catalogue and stock — both the screens and the queries that read and update their records.',
      'Developed a food delivery and dine-out platform: the React front end for each screen, plus the API calls that load and save its content.',
      'Extracted shared components used across both projects, so repeated screens did not get rebuilt each time.',
      'Traced and cleared bugs from internal testing — mostly stale data after an update, and layouts breaking on small screens.',
    ],
    tags: ['React', 'Node.js', 'SQL'],
  },
  {
    id: 'sih',
    kind: 'award',
    period: '2025',
    title: '2nd place, out of 20 teams',
    org: 'Internal Smart India Hackathon, DYPIU',
    body: 'Placed second at the university-internal round of SIH 2025.',
  },
  {
    id: 'first-three',
    kind: 'build',
    period: '2025',
    title: 'Synsia, Aureon, VineVista',
    org: 'Personal projects',
    body: 'Three applications planned, coded and deployed solo — a real-time collaborative editor, a video streaming site and an online store. Deliberately different problems: live sync, media at scale, and transactional data.',
    tags: ['Socket.IO', 'Supabase', 'MongoDB'],
  },
  {
    id: 'btech',
    kind: 'education',
    period: '2024 — 2028',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'D. Y. Patil International University, Pune',
    body: 'Specialising in cloud computing. Currently in year 3 of 4.',
  },
]
