import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/components/Footer/Component'
import { Header } from '@/components/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './reset.css'
import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { SvgSpriteSheet } from '@/svg/SvgSpriteSheet'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        {/* DarkReader */}
        <meta name="darkreader-lock" />

        {/* Edge/Chrome Forced Dark Mode */}
        <meta name="forced-colors" content="none" />
        <meta name="color-scheme" content="light" />

        {/* Windows High Contrast Mode */}
        <meta name="ms-high-contrast" content="none" />

        {/* Safari/WebKit Auto Dark Mode */}
        <meta name="color-scheme" content="light only" />
      </head>
      <body>
        <SvgSpriteSheet />
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
