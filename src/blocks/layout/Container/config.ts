import type { Block } from 'payload'
import { exposedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'

export const ContainerConfig: Block = {
  slug: 'container',
  interfaceName: 'ContainerBlock',
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: exposedBuildingBlocks,
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
