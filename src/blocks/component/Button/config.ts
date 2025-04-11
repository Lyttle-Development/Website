import type { Block } from 'payload'

export const ButtonConfig: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      label: 'Text',
    },
    {
      name: 'color',
      type: 'select',
      label: 'Color',
      required: true,
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Orange', value: 'orange' },
      ],
      defaultValue: 'blue',
    },
  ],
}
