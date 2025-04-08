import type { Block } from 'payload'

export const BannerTitleConfig: Block = {
  slug: 'bannerTitle',
  interfaceName: 'BannerTitleBlock',
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
      name: 'reverseAlign',
      type: 'checkbox',
      label: 'Reverse Alignment',
      defaultValue: true,
    },
  ],
}
