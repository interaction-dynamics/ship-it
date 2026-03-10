import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'description',
      type: 'text',
      required: true
    },
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'date',
      type: 'date',
      required: true
    },
    {
      name: 'readTime',
      type: 'text'
    },
    {
      name: 'categories',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true
        }
      ]
    },
    {
      name: 'imageUrl',
      type: 'text'
    }
  ]
};
