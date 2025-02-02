import {defineType, defineField, defineArrayMember} from 'sanity'
import {FaNewspaper} from 'react-icons/fa6'

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  icon: FaNewspaper,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'imageObject'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blogContent'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}]
    })
  ]
})
