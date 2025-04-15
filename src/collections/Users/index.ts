import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { MODULE_ENABLED } from '../../../constants'
import { collectionEnabled } from '@/utilities/collectionEnabled'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: (args) => collectionEnabled(MODULE_ENABLED.users, authenticated, args),
    delete: (args) => collectionEnabled(MODULE_ENABLED.users, authenticated, args),
    read: authenticated,
    update: (args) => collectionEnabled(MODULE_ENABLED.users, authenticated, args),
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
