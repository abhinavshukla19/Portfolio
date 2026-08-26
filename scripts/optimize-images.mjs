// Build-time image optimizer.
// Reads raw screenshots from public/Images and emits width-capped
// AVIF + WebP + a JPEG fallback into public/images.
import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'assets/raw'
const OUT = 'public/images'
const WIDTHS = [640, 1280]

const kb = (b) => `${(b / 1024).toFixed(0)} KB`

await mkdir(OUT, { recursive: true })

const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f))
if (!files.length) {
  console.log(`No source images in ${SRC}`)
  process.exit(0)
}

let before = 0
let after = 0

for (const file of files) {
  const src = path.join(SRC, file)
  const base = path.parse(file).name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const original = (await stat(src)).size
  before += original

  const meta = await sharp(src).metadata()
  const widths = WIDTHS.filter((w) => w <= (meta.width ?? w)).concat(
    WIDTHS.every((w) => w > (meta.width ?? 0)) ? [meta.width] : [],
  )

  let produced = 0
  for (const w of widths) {
    const suffix = w === Math.max(...widths) ? '' : `-${w}`
    const pipeline = sharp(src).resize({ width: w, withoutEnlargement: true })

    const avif = await pipeline.clone().avif({ quality: 55, effort: 6 }).toFile(`${OUT}/${base}${suffix}.avif`)
    const webp = await pipeline.clone().webp({ quality: 78 }).toFile(`${OUT}/${base}${suffix}.webp`)
    const jpg = await pipeline.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/${base}${suffix}.jpg`)
    produced += avif.size + webp.size + jpg.size
  }

  // Count only the largest AVIF toward "after" — that's what most browsers actually fetch.
  const primary = await sharp(src)
    .resize({ width: Math.max(...widths), withoutEnlargement: true })
    .avif({ quality: 55, effort: 6 })
    .toBuffer()
  after += primary.length

  console.log(
    `${file.padEnd(24)} ${kb(original).padStart(9)} -> ${kb(primary.length).padStart(8)} avif  (${widths.join(', ')}px, ${kb(produced)} total on disk)`,
  )
}

console.log(
  `\nPrimary payload: ${kb(before)} -> ${kb(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`,
)
