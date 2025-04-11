import {defineField, defineType} from 'sanity'
import {FaTags} from 'react-icons/fa'

export const CategoryParent = defineType({
  name: 'categoryParent',
  title: 'Category Parent',
  type: 'document',
  icon: FaTags,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    })
  ]
})
