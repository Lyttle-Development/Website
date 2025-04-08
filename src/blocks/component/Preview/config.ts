import type { Block } from 'payload'

export const PreviewConfig: Block = {
  slug: 'preview',
  interfaceName: 'PreviewBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
