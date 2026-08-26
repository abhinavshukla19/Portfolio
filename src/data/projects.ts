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
  stack: readonly string[]
  image: string | null
  imageAlt: string
  liveUrl: string | null
  repoUrl: string | null
  accent: string
}

export const projects: readonly Project[] = [
  {
    id: 'folio',
    index: '01',
    title: 'Folio',
    kind: 'Document toolkit',
    year: '2026',
    pitch: 'Five PDF tools that never upload your file.',
    summary:
      'A browser-based document workspace: reorder and edit PDF pages, convert images to PDF, merge documents, edit photos, and scan a physical page with a camera. There is no backend — the browser reads the file you pick straight into the tab and every operation happens there. Also ships as an installable PWA and an Android build.',
    hardPart:
      'The scanner. Finding the page inside a camera frame, solving the perspective and mapping it back to a rectangle, then evening out the lighting per pixel so a shadow falling across the paper lifts off instead of turning half the page black. The photo editor was the other one: edits are stored as descriptions rather than baked pixels, so every change is measured against the original decoded bitmap and written exactly once at export — a photo never loses a generation per adjustment.',
    stack: ['React', 'TypeScript', 'pdf-lib', 'pdf.js', 'Canvas', 'Tailwind', 'Capacitor', 'PWA'],
    image: null,
    imageAlt: 'Folio document toolkit interface',
    // TODO(content): add the live URL and repo once Folio is deployed.
    liveUrl: null,
    repoUrl: null,
    accent: '#8B5CF6',
  },
  {
    id: 'synsia',
    index: '02',
    title: 'Synsia',
    kind: 'Collaborative editor',
    year: '2025',
    pitch: 'A shared document where everyone types at once.',
    summary:
      'A real-time collaborative text editor. Several people type into one document simultaneously and every edit reaches every open browser over WebSockets, with no page refresh and no account — across three moving parts: a React client, a Socket.IO server and the database behind it.',
    hardPart:
      'A bug that erased a user’s work the moment they refreshed. Fixing it meant persisting documents to MongoDB rather than holding them in socket memory, which also forced a hosting move — off Cloudflare Pages and onto Vercel with a Google Cloud VM running the backend.',
    stack: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
    image: null,
    imageAlt: 'Synsia collaborative editor',
    // TODO(content): add the live URL and repo.
    liveUrl: null,
    repoUrl: null,
    accent: '#2F6FE0',
  },
  {
    id: 'aureon',
    index: '03',
    title: 'Aureon',
    kind: 'Streaming site',
    year: '2025',
    pitch: 'A streaming catalogue that logs you in without a password.',
    summary:
      'A video streaming site holding around 40 titles across 6 category rows, checked at three screen widths from a 360px phone up to desktop.',
    hardPart:
      'Replacing password sign-up with a 6-digit OTP login through Supabase — accounts and session records live there too, so there is no separate auth service to keep in sync.',
    stack: ['React', 'Express', 'Supabase'],
    image: null,
    imageAlt: 'Aureon streaming interface',
    // TODO(content): add the live URL and repo.
    liveUrl: null,
    repoUrl: null,
    accent: '#C8A227',
  },
  {
    id: 'vinevista',
    index: '04',
    title: 'VineVista',
    kind: 'E-commerce',
    year: '2025',
    pitch: 'An online store where prices change without a deploy.',
    summary:
      'An e-commerce storefront listing 30 products across 8 categories, with filtering and search over the catalogue, plus authentication and cart management.',
    hardPart:
      'Modelling the product and stock tables in Supabase so that pricing and listings are data rather than code — changing what the store sells does not require shipping a new build.',
    stack: ['React', 'Express', 'Supabase', 'PostgreSQL'],
    image: '/images/vinevista',
    imageAlt: 'VineVista storefront',
    liveUrl: 'https://vinevista.fourrnexus.com/signin',
    repoUrl: 'https://github.com/abhinavshukla19/vinevista',
    accent: '#7B3F5E',
  },
]
