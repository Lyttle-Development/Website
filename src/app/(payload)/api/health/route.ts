/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import '@payloadcms/next/css'

export function GET() {
  const body = {
    status: 'ok',
    uptime: typeof process.uptime === 'function' ? Math.floor(process.uptime()) : undefined,
    ts: new Date().toISOString(),
  }

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}
