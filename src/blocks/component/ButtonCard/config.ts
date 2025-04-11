import type { Block } from 'payload'

export const ButtonCardConfig: Block = {
  slug: 'buttonCard',
  interfaceName: 'ButtonCardBlock',
  labels: {
    plural: {
      en: 'Button Cards',
      nl: 'Knopkaarten',
    },
    singular: {
      en: 'Button Card',
      nl: 'Knopkaart',
    },
  },
  fields: [
    {
      name: 'headingType',
      type: 'select',
      label: {
        en: 'Heading Type',
        nl: 'Koptekst Type',
      },
      options: [
        { label: 'Heading 1', value: 'h1' },
        { label: 'Heading 2', value: 'h2' },
        { label: 'Heading 3', value: 'h3' },
        { label: 'Heading 4', value: 'h4' },
        { label: 'Heading 5', value: 'h5' },
        { label: 'Heading 6', value: 'h6' },
      ],
      defaultValue: 'h1',
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      label: {
        en: 'Title',
        nl: 'Titel',
      },
    },
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
      name: 'buttonText',
      type: 'text',
      localized: true,
      required: true,
      label: {
        en: 'Button Text',
        nl: 'Knoptekst',
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
