import type { Block } from 'payload'

export const ColorfulTitleConfig: Block = {
  slug: 'colorfulTitle',
  interfaceName: 'ColorfulTitleBlock',
  fields: [
    {
      name: 'headingType',
      type: 'select',
      label: 'Heading Type',
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
      required: true,
      label: 'Title',
    },
    {
      name: 'colorTitle',
      type: 'text',
      required: true,
      label: 'Color Title',
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
    {
      name: 'colorPadding',
      type: 'select',
      label: 'Add Padding to Color Title',
      required: true,
      options: [
        { label: 'None', value: 'none' },
        { label: 'Light', value: 'light' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      defaultValue: 'none',
    },
    {
      name: 'reverseAlign',
      type: 'checkbox',
      label: 'Reverse Alignment',
      defaultValue: true,
    },
    {
      name: 'reverseColor',
      type: 'checkbox',
      label: 'Reverse Color Order',
      defaultValue: false,
    },
  ],
}
