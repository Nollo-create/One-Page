// Convert JPG logos to PNG with transparent background
// Usage: node scripts/remove-white-bg.mjs

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, '..', 'public', 'projects')

// JPG → PNG mappings. Threshold = how aggressive to remove white.
//  - Pixels brighter than `cutoff` in ALL channels → fully transparent
//  - Pixels brighter than `feather` but darker than cutoff → partial alpha
//  - Everything else → kept opaque
const JOBS = [
  { in: 'd-cosmetics.jpg',   out: 'd-cosmetics.png',   cutoff: 240, feather: 215 },
  { in: 'del-toros.jpg',     out: 'del-toros.png',     cutoff: 235, feather: 200 },
  { in: 'tanja-rajkovic.jpg', out: 'tanja-rajkovic.png', cutoff: 230, feather: 200 },
]

for (const job of JOBS) {
  const inPath = path.join(dir, job.in)
  const outPath = path.join(dir, job.out)
  console.log(`→ ${job.in}`)

  const { data, info } = await sharp(inPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const px = Buffer.from(data) // mutable copy

  for (let i = 0; i < px.length; i += 4) {
    const r = px[i], g = px[i + 1], b = px[i + 2]
    const min = Math.min(r, g, b)

    if (min >= job.cutoff) {
      // Definitely white → erase
      px[i + 3] = 0
    } else if (min >= job.feather) {
      // Edge / anti-aliasing pixel → smooth alpha ramp
      const t = (min - job.feather) / (job.cutoff - job.feather)
      px[i + 3] = Math.round(255 * (1 - t))
    }
  }

  await sharp(px, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath)

  console.log(`  ✓ ${job.out}`)
}

console.log('\nDone.')
