/**
 * Entry point for cPanel Node.js (Passenger).
 *
 * Passenger sets process.env.PORT automatically; we just hand it to Next.
 * NODE_ENV=production should also be set by Passenger in production,
 * but we default to it here in case it isn't.
 */
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT || '3000', 10)
const hostname = '0.0.0.0'

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsed = parse(req.url || '/', true)
    handle(req, res, parsed)
  }).listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
}).catch(err => {
  console.error('Next.js failed to start:', err)
  process.exit(1)
})
