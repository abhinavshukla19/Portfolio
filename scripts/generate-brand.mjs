// Generates the social card, favicon and apple touch icon from the brand palette.
import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

const INK = '#0D0D0F'
const PAPER = '#F4F1EA'
const ACCENT = '#FF3D1F'
const SERIF = "Georgia, 'Times New Roman', serif"
const MONO = "'Consolas', 'Courier New', monospace"

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${ACCENT}"/>

  <text x="80" y="112" font-family="${MONO}" font-size="20" letter-spacing="5"
        fill="${PAPER}" opacity="0.5">OPEN TO WORK &#183; PUNE, INDIA</text>

  <text x="76" y="300" font-family="${SERIF}" font-size="150" fill="${PAPER}">Abhinav</text>
  <text x="76" y="432" font-family="${SERIF}" font-size="150" font-style="italic"
        fill="${ACCENT}">Shukla</text>

  <line x1="80" y1="502" x2="1120" y2="502" stroke="${PAPER}" stroke-opacity="0.18" stroke-width="1"/>

  <text x="80" y="552" font-family="${MONO}" font-size="22" letter-spacing="3"
        fill="${PAPER}" opacity="0.75">FULL-STACK DEVELOPER</text>
  <text x="1120" y="552" text-anchor="end" font-family="${MONO}" font-size="22" letter-spacing="3"
        fill="${PAPER}" opacity="0.75">abhinavshukla.me</text>
</svg>`

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${INK}"/>
  <text x="32" y="47" text-anchor="middle" font-family="${SERIF}" font-size="42" fill="${ACCENT}">A</text>
</svg>`

await sharp(Buffer.from(ogSvg)).png().toFile('public/og-image.png')
await writeFile('public/favicon.svg', faviconSvg.trim())
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('public/apple-touch-icon.png')

console.log('Wrote public/og-image.png, public/favicon.svg, public/apple-touch-icon.png')
