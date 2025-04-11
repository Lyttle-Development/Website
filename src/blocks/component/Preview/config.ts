import type { Block } from 'payload'

export const PreviewConfig: Block = {
  slug: 'preview',
  interfaceName: 'PreviewBlock',
  labels: {
    plural: {
      en: 'Previews',
      nl: 'Voorvertoningen',
    },
    singular: {
      en: 'Preview',
      nl: 'Voorvertoning',
    },
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      label: {
        en: 'Media',
        nl: 'Media',
      },
      relationTo: 'media',
      required: false,
    },
  ],
}
