import type { Block } from 'payload'

export const ColorfulTitleConfig: Block = {
  slug: 'colorfulTitle',
  interfaceName: 'ColorfulTitleBlock',
  labels: {
    plural: {
      en: 'Colorful Titles',
      nl: 'Kleurrijke Titels',
    },
    singular: {
      en: 'Colorful Title',
      nl: 'Kleurrijke Titel',
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
      name: 'colorTitle',
      type: 'text',
      localized: true,
      required: true,
      label: {
        en: 'Color Title',
        nl: 'Kleur Titel',
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
    {
      name: 'colorPadding',
      type: 'select',
      label: {
        en: 'Color Padding',
        nl: 'Kleur Opvulling',
      },
      required: true,
      options: [
        { label: 'None', value: 'none' },
        { label: 'Light', value: 'light' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'Auto', value: 'auto' },
      ],
      defaultValue: 'none',
    },
    {
      name: 'reverseAlign',
      type: 'checkbox',
      label: {
        en: 'Reverse Align',
        nl: 'Omgekeerde Uitlijning',
      },
      defaultValue: true,
    },
    {
      name: 'reverseColor',
      type: 'checkbox',
      label: {
        en: 'Reverse Color',
        nl: 'Omgekeerde Kleur',
      },
      defaultValue: false,
    },
  ],
}
