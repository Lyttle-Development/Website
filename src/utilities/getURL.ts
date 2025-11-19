import canUseDOM from './canUseDOM'

export const getServerSideURL = () => {
  // Treat empty or whitespace-only environment values as unset.
  const envUrl = (process.env.NEXT_PUBLIC_SERVER_URL || '').trim()

  if (envUrl) return envUrl

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL && process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
  }

  return 'http://localhost:3000'
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL && process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
  }

  const envUrl = (process.env.NEXT_PUBLIC_SERVER_URL || '').trim()
  return envUrl || 'http://localhost:3000'
}
