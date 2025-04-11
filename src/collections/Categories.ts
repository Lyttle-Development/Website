import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'
import { collectionEnabled } from '@/utilities/collectionEnabled'
import { MODULE_ENABLED } from 'constrants'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: (args) => collectionEnabled(MODULE_ENABLED.categories, authenticated, args),
    delete: (args) => collectionEnabled(MODULE_ENABLED.categories, authenticated, args),
    read: (args) => collectionEnabled(MODULE_ENABLED.categories, anyone, args),
    update: (args) => collectionEnabled(MODULE_ENABLED.categories, authenticated, args),
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
