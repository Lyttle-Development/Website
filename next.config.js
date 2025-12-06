import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      // Ensure we don't pass empty/invalid values into new URL()
      ...[
        'http://localhost',
        'http://localhost:3000',
        'https://www.lyttledevelopment.com',
        NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */,
      ]
        .filter(Boolean)
        .map((item) => {
          try {
            const url = new URL(item)

            return {
              hostname: url.hostname,
              protocol: url.protocol.replace(':', ''),
            }
          } catch (_err) {
            // If an invalid URL is provided, skip it rather than crashing.
            // Keep the behavior safe for local development when env vars may be empty.
            console.warn('Skipping invalid NEXT_PUBLIC_SERVER_URL for remotePatterns:', item)
            return null
          }
        })
        .filter(Boolean),
    ],
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
