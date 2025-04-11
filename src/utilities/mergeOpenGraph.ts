import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'
import { WEBSITE_NAME } from '../../constrants'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Created by Lyttle Development.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: WEBSITE_NAME,
  title: WEBSITE_NAME,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
