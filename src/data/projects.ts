export type Project = {
  id: string
  index: string
  title: string
  kind: string
  year: string
  /** Shown on the card face — one line, no wrapping ambition. */
  pitch: string
  /** Shown when the row expands. */
  summary: string
  /** The interesting engineering problem. This is the part people remember. */
  hardPart: string
  /** Concrete, checkable details. Rendered as a short spec list. */
  facts: readonly { label: string; value: string }[]
  stack: readonly string[]
  image: string | null
  imageAlt: string
  liveUrl: string | null
  /** Some projects split frontend and backend across two repos. */
  repos: readonly { label: string; href: string }[]
  /** Set when the live link lands on a sign-in wall, so the card can say so. */
  liveNote?: string
  /** Throwaway account shown on the card so a visitor can get past that wall. */
  demo?: { email: string; password: string }
  accent: string
}

export const projects: readonly Project[] = [
  {
    id: 'folio',
    index: '01',
    title: 'Folio',
    kind: 'Document toolkit',
    year: '2026',
    pitch: 'Five PDF tools, and your file never leaves the tab.',
    summary:
      'A document workspace with no backend at all. Scan a page with the camera, reorder and edit PDF pages, add text, covers or a signature, convert images to PDF, merge documents, and edit photos. Your file is read into memory in the tab and the parsing, rewriting and rendering all happen there, in JavaScript and WebAssembly. It installs as a PWA and runs offline.',
    hardPart:
      'The scanner. Finding the page corners inside a camera frame, solving the perspective and mapping it back to a rectangle, then evening out the lighting per pixel so a shadow across the paper lifts off instead of turning half the page black. The photo editor was the other one: edits are stored as descriptions rather than baked pixels, each measured against the original decoded bitmap and written exactly once at export — so a photo never loses a generation per adjustment.',
    facts: [
      { label: 'Tools', value: 'Scan, edit, convert, merge, retouch' },
      { label: 'Bytes uploaded', value: '0 — counted live on the page' },
      { label: 'Enforced by', value: 'A strict Content-Security-Policy' },
      { label: 'Also ships as', value: 'Installable PWA + Android build' },
    ],
    stack: ['React', 'TypeScript', 'WebAssembly', 'pdf-lib', 'pdf.js', 'Canvas', 'Tailwind', 'Capacitor'],
    image: '/images/folio',
    imageAlt: 'Folio — browser-based PDF and document toolkit',
    liveUrl: 'https://folio.abhinavshukla.me/',
    repos: [{ label: 'Source', href: 'https://github.com/abhinavshukla19/folio' }],
    accent: '#8B5CF6',
  },
  {
    id: 'synsia',
    index: '02',
    title: 'Synsia',
    kind: 'Collaborative editor',
    year: '2025',
    pitch: 'Open a link and write. So can everyone else.',
    summary:
      'A live collaborative notepad — no account, no setup, no server. Opening the site mints a document URL; anyone with that link joins and edits the same buffer, with everyone currently present listed in the sidebar under a randomly assigned name. Markdown, with an edit/preview toggle, a live word and character count, autosave, and a one-click Markdown export.',
    hardPart:
      'First a bug that erased a user’s work the moment they refreshed, fixed by persisting documents instead of holding them in socket memory. Then the bigger problem: that fix needed a long-lived server, and the VM running it was costing money to sit idle. So the room moved into a Cloudflare Durable Object — one instance per document, owning the sockets, the presence list and the text itself. WebSocket hibernation lets it sleep while connections stay open, so an idle document costs nothing, and MongoDB and the whole server went away with it.',
    facts: [
      { label: 'Sign-up required', value: 'None — the URL is the document' },
      { label: 'Presence', value: 'Live list of who else is in the doc' },
      { label: 'Format', value: 'Markdown, with live preview and .md export' },
      { label: 'Backend', value: 'One Durable Object per document' },
      { label: 'Servers to run', value: 'Zero' },
    ],
    stack: ['React', 'TypeScript', 'Cloudflare Workers', 'Durable Objects', 'WebSockets'],
    image: '/images/synsia',
    imageAlt: 'Synsia — real-time collaborative markdown notepad',
    liveUrl: 'https://synsia.pages.dev/',
    repos: [
      { label: 'Client', href: 'https://github.com/abhinavshukla19/synsia_frontend' },
      { label: 'Server', href: 'https://github.com/abhinavshukla19/synsia_backend' },
    ],
    accent: '#2F6FE0',
  },
  {
    id: 'aureon',
    index: '03',
    title: 'Aureon',
    kind: 'Streaming platform',
    year: '2025',
    pitch: 'A streaming front end with auth that actually holds.',
    summary:
      'A video streaming platform: a browsable catalogue with genre rows and a numbered “Top 5 today” rail, a detail view carrying rating, runtime, audio and subtitle tracks, a personal watchlist, and a settings area. Around 40 titles across 6 category rows, checked at three widths from a 360px phone up to desktop.',
    hardPart:
      'Two-step authentication. Sign-in takes a password and then issues a six-digit OTP to the account’s email, verified before the session is granted, with resend handling on the code — accounts and session records all live in Supabase, so there is no second auth service to keep in sync.',
    facts: [
      { label: 'Catalogue', value: '~40 titles across 6 rows' },
      { label: 'Auth', value: 'Password + 6-digit email OTP' },
      { label: 'Per account', value: 'Watchlist, profile, settings' },
      { label: 'Responsive', value: 'Verified 360px → desktop' },
    ],
    stack: ['Next.js', 'React', 'Supabase'],
    image: '/images/aureon',
    imageAlt: 'Aureon — video streaming platform interface',
    liveUrl: 'https://aureon.abhinavshukla.me/',
    repos: [{ label: 'Source', href: 'https://github.com/abhinavshukla19/Aureon-frontend' }],
    liveNote: 'Sign-in required',
    accent: '#A855F7',
  },
  {
    id: 'vinevista',
    index: '04',
    title: 'VineVista',
    kind: 'E-commerce',
    year: '2025',
    pitch: 'A premium spirits store where the catalogue is data, not code.',
    summary:
      'A drinks storefront listing 30 products across 8 categories — rum, gin, whisky, vermouth and the rest — each with its own rating and rupee price. Search across the catalogue, a cart and order history, account management down to self-service deletion, and an admin path for adding new stock, all behind a dark, luxury-leaning visual language.',
    hardPart:
      'Modelling the product and stock tables in Supabase so pricing and listings are data rather than code — new stock is added through the app itself, and changing what the store sells never requires shipping a new build.',
    facts: [
      { label: 'Catalogue', value: '30 products, 8 categories' },
      { label: 'Per product', value: 'Rating, category, ₹ pricing' },
      { label: 'Customer', value: 'Search, cart, orders, profile' },
      { label: 'Admin', value: 'Add products without a deploy' },
    ],
    stack: ['React', 'Express', 'Supabase', 'PostgreSQL'],
    image: '/images/vinevista',
    imageAlt: 'VineVista storefront',
    liveUrl: 'https://vinevista.fourrnexus.com/signin',
    repos: [{ label: 'Source', href: 'https://github.com/abhinavshukla19/vinevista' }],
    demo: { email: 'demo@gmail.com', password: 'Demo@123' },
    accent: '#7B3F5E',
  },
]
