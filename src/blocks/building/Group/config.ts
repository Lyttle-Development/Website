import type { Block } from 'payload'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

export const GroupConfig: Block = {
  slug: 'group',
  interfaceName: 'GroupBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedComponentBlocks,
    },
  ],
}
