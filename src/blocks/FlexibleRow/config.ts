import type { Block } from 'payload'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

export const FlexibleRow: Block = {
  slug: 'flexibleRow',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedComponentBlocks,
    },
  ],
}
