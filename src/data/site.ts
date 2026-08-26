export const site = {
  name: 'Abhinav Shukla',
  initials: 'AS',
  domain: 'abhinavshukla.me',
  url: 'https://abhinavshukla.me',
  /** Custom-domain address. Needs a mailbox or forwarding rule to actually receive. */
  email: 'contact@abhinavshukla.me',
  /** The address on the résumé — kept as a fallback. */
  emailFallback: 'abhinavshukla9490@gmail.com',
  location: 'Pune, India',
  role: 'Full-stack developer',
  tagline:
    'I take a feature from a blank screen to a live URL — the interface, the API calls, the database and the deploy.',
  resume: '/abhinav-shukla-resume.pdf',
  socials: [
    { label: 'GitHub', handle: 'abhinavshukla19', href: 'https://github.com/abhinavshukla19' },
    {
      label: 'LinkedIn',
      handle: 'abhinavshukla4798',
      href: 'https://www.linkedin.com/in/abhinavshukla4798',
    },
    { label: 'Email', handle: 'contact@abhinavshukla.me', href: 'mailto:contact@abhinavshukla.me' },
  ],
  /** Numbers the About section counts up. All verifiable from the résumé. */
  stats: [
    { value: '4', label: 'Apps shipped solo' },
    { value: '3', label: 'Months interning' },
    { value: '2nd', label: 'SIH, 20 teams' },
    { value: '2028', label: 'B.Tech CSE' },
  ],
} as const

export type Social = (typeof site.socials)[number]
