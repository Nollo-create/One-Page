/**
 * Compress + resize project logos.
 * Keeps PNGs with alpha; downscales the giant ones and re-encodes with maxCompression.
 *
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promises as fs } from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, '..', 'public', 'projects')

const MAX_DIMENSION = 1200          // max W or H — biggest card on hero is ~800px @ 2x DPR
const PNG_OPTS  = { compressionLevel: 9, quality: 85, palette: true }
const JPG_OPTS  = { quality: 80, mozjpeg: true }

const files = await fs.readdir(dir)
const targets = files.filter(f => /\.(png|jpe?g)$/i.test(f))

for (const file of targets) {
  const full = path.join(dir, file)
  const before = (await fs.stat(full)).size
  const ext = path.extname(file).toLowerCase()

  const img = sharp(full)
  const meta = await img.metadata()
  const resize = (meta.width || 0) > MAX_DIMENSION || (meta.height || 0) > MAX_DIMENSION

  let pipeline = img.rotate()                          // honour EXIF orientation
  if (resize) pipeline = pipeline.resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside', withoutEnlargement: true })

  const out = ext === '.png'
    ? await pipeline.png(PNG_OPTS).toBuffer()
    : await pipeline.jpeg(JPG_OPTS).toBuffer()

  // Write to temp file then rename — Windows can't overwrite a file that sharp
  // still has open as input.
  const tmp = full + '.tmp'
  await fs.writeFile(tmp, out)
  await fs.rm(full)
  await fs.rename(tmp, full)
  const after = out.length
  const pct = Math.round((1 - after / before) * 100)
  console.log(`${file.padEnd(28)} ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${pct}%)${resize ? ` ${meta.width}×${meta.height} → ≤${MAX_DIMENSION}` : ''}`)
}

console.log('\nDone.')
