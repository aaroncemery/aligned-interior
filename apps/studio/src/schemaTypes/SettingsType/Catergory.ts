import {defineField, defineType} from 'sanity'
import {FaTag} from 'react-icons/fa'

export const Category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FaTag,
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
    }),
    defineField({
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{type: 'categoryParent'}]
    })
  ]
})
