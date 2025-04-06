import type { Block } from 'payload'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

export const FlexibleRowConfig: Block = {
  slug: 'flexibleRow',
  interfaceName: 'FlexibleRowBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedComponentBlocks,
    },
    {
      name: 'container',
      type: 'checkbox',
      label: 'Enclose in a container',
      defaultValue: true,
      required: true,
    },
  ],
}
