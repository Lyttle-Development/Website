import type { Block } from 'payload'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

export const FlexibleRow: Block = {
  slug: 'flexibleRow',
  interfaceName: 'FlexibleRowBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedComponentBlocks,
    },
  ],
}
