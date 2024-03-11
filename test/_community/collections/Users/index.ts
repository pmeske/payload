import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 120,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users