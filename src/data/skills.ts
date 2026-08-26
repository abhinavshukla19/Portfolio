export type SkillGroup = {
  id: string
  index: string
  label: string
  items: readonly string[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'languages',
    index: '01',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    index: '02',
    label: 'Interface',
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    index: '03',
    label: 'Server',
    items: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'Socket.IO'],
  },
  {
    id: 'data',
    index: '04',
    label: 'Data',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'ship',
    index: '05',
    label: 'Ship',
    items: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Render', 'Postman'],
  },
]

/** Flat list used by the marquee. */
export const marqueeSkills = [
  'TypeScript',
  'React',
  'Node.js',
  'Socket.IO',
  'Next.js',
  'MongoDB',
  'Supabase',
  'PostgreSQL',
  'Express',
  'Tailwind',
] as const
