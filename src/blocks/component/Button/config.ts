import type { Block } from 'payload'

export const ButtonConfig: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  labels: {
    plural: {
      en: 'Buttons',
      nl: 'Knoppen',
    },
    singular: {
      en: 'Button',
      nl: 'Knop',
    },
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      localized: true,
      required: true,
      label: {
        en: 'Text',
        nl: 'Tekst',
      },
    },
    {
      name: 'color',
      type: 'select',
      label: {
        en: 'Color',
        nl: 'Kleur',
      },
      required: true,
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Orange', value: 'orange' },
      ],
      defaultValue: 'blue',
    },
  ],
}
