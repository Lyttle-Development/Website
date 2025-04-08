import type { Block } from 'payload'

export const SpacerConfig: Block = {
  slug: 'spacer',
  interfaceName: 'SpacerBlock',
  fields: [
    {
      name: 'amount',
      type: 'number',
      label: 'Amount',
      defaultValue: 1,
      required: true,
    },
    {
      name: 'hideOnMobile',
      type: 'checkbox',
      label: 'Hide on Mobile',
      defaultValue: false,
    },
  ],
}
