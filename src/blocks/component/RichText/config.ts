import type { Block } from 'payload'

export const RichTextConfig: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      label: 'Rich Text',
      required: true,
      localized: true,
    },
  ],
}
