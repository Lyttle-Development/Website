import type { Block } from 'payload'
import { exposedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'

export const SpaceBackgroundConfig: Block = {
  slug: 'spaceBackground',
  interfaceName: 'SpaceBackgroundBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedBuildingBlocks,
    },
  ],
}
