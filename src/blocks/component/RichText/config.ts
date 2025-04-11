import type { Block } from 'payload'

export const RichTextConfig: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  labels: {
    plural: {
      en: 'Rich Texts',
      nl: 'Rijke Teksten',
    },
    singular: {
      en: 'Rich Text',
      nl: 'Rijke Tekst',
    },
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      localized: true,
      label: {
        en: 'Rich Text',
        nl: 'Rijke Tekst',
      },
      required: true,
    },
  ],
}
