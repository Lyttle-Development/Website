import type { Block } from 'payload'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

export const SpaceBackgroundConfig: Block = {
  slug: 'spaceBackground',
  interfaceName: 'SpaceBackgroundBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedComponentBlocks,
    },
  ],
}
