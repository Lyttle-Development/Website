import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from '../../../../constants'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
    locale: DEFAULT_LOCALE.code as 'all',
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      // For a catch-all route ([...slug]) Next expects `params.slug` to be an array of path segments.
      // Convert string slugs like "about/team" into ["about", "team"], and leave arrays as-is.
      const slugArray = Array.isArray(slug)
        ? slug
        : typeof slug === 'string'
          ? slug.split('/').filter(Boolean)
          : [String(slug)]

      return { slug: slugArray }
    })

  return params
}

const queryPageBySlug = cache(
  async ({ slug, locale, draft }: { slug: string; locale?: string; draft?: boolean }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      draft: draft ?? false,
      limit: 1,
      pagination: false,
      overrideAccess: draft ?? false,
      where: { slug: { equals: slug } },
      locale: (locale || DEFAULT_LOCALE.code) as 'all' | undefined, // Use the provided locale, defaulting to 'en'
    })

    return result.docs?.[0] || null
  },
)

type PageArgs = {
  params: Promise<{
    slug?: string | string[]
  }>
}

export default async function Page({ params: paramsPromise }: PageArgs) {
  try {
    // Ensure draftMode is called on the server
    const { isEnabled: draft } = await draftMode()
    const { slug = 'home' } = await paramsPromise

    let pathArray: string[] = Array.isArray(slug) ? slug : [slug]
    const firstSegment = pathArray[0]

    // Determine locale
    const locale =
      SUPPORTED_LANGUAGES.map((l) => l.code).find((lang) => firstSegment === lang) ||
      DEFAULT_LOCALE.code

    // If the first segment is a supported locale, remove it from the path
    if (firstSegment === locale) {
      pathArray = pathArray.slice(1)
    }

    // If nothing is left in the path, default to 'home'
    const path = pathArray.length === 0 ? 'home' : pathArray.join('/')

    const url = '/' + path

    // Fetch page data using the adjusted slug, locale, and draft flag.
    const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
      slug: path,
      locale,
      draft,
    })

    if (!page) {
      // For missing page, we redirect.
      return <PayloadRedirects url={url} />
    }

    const { hero, layout } = page

    return (
      <>
        <PageClient />
        {/* Allow redirects for valid pages as well */}
        <PayloadRedirects disableNotFound url={url} />
        {draft && <LivePreviewListener />}
        <RenderHero {...hero} />
        <RenderBlocks blocks={layout} />
      </>
    )
  } catch (error: any) {
    console.error('Error rendering Page component:', error)
    // Render an error UI (customize as needed)
    return <div>Error rendering page: {error.message}</div>
  }
}

export async function generateMetadata({ params: paramsPromise }: PageArgs): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise

  // Normalize slug to an array of segments and handle locale detection the same way as the page renderer
  const pathArray: string[] = Array.isArray(slug) ? slug : [slug]
  const firstSegment = pathArray[0]

  const locale =
    SUPPORTED_LANGUAGES.map((l) => l.code).find((lang) => firstSegment === lang) ||
    DEFAULT_LOCALE.code

  let normalizedPathArray = pathArray
  if (firstSegment === locale) {
    normalizedPathArray = pathArray.slice(1)
  }

  const path = normalizedPathArray.length === 0 ? 'home' : normalizedPathArray.join('/')

  const page = await queryPageBySlug({
    slug: path,
    locale,
  })

  return generateMeta({ doc: page })
}
