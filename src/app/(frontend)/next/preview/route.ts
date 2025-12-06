import type { CollectionSlug, PayloadRequest } from 'payload'
import { getPayload } from 'payload'

import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import configPromise from '@payload-config'
import { getServerSideURL } from '@/utilities/getURL'

export async function GET(
  request: NextRequest,
  _context: { params: Promise<{}> },
): Promise<Response> {
  const payload = await getPayload({ config: configPromise })

  const { searchParams } = request.nextUrl

  const path = searchParams.get('path')
  const collection = searchParams.get('collection') as CollectionSlug | null
  const slug = searchParams.get('slug')
  const previewSecret = searchParams.get('previewSecret')

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  if (!path || !collection || !slug) {
    return new Response('Insufficient search params', { status: 404 })
  }

  if (!path.startsWith('/')) {
    return new Response('This endpoint can only be used for relative previews', { status: 500 })
  }

  let user

  try {
    user = await payload.auth({
      // Pass through the NextRequest to Payload as best-effort
      req: request as unknown as PayloadRequest,
      headers: request.headers,
    })
  } catch (error) {
    payload.logger.error({ err: error }, 'Error verifying token for live preview')
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  const draft = await draftMode()

  if (!user) {
    draft.disable()
    return new Response('You are not allowed to preview this page', { status: 403 })
  }

  // You can add additional checks here to see if the user is allowed to preview this page
  draft.enable()

  // Ensure we have a usable base URL for the redirect. In some Next contexts
  // request.url can be empty or undefined; fall back to the server-side URL.
  const base = request.url || getServerSideURL()

  let redirectURL
  try {
    redirectURL = new URL(path, base)
  } catch (err) {
    // Defensive fallback to avoid crashing the request handler.
    // Log the problematic values for debugging and return a 500 response.
    // Using console.error here keeps the handler simple and visible in dev logs.
    console.error('Failed to create redirect URL from', { path, base, err })
    return new Response('Invalid redirect URL', { status: 500 })
  }

  return NextResponse.redirect(redirectURL)
}
