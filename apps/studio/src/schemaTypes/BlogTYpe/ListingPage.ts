import {defineType, defineField} from 'sanity'
import {FaList} from 'react-icons/fa'

export default defineType({
  name: 'blogListingPage',
  title: 'Blog Listing Page',
  type: 'document',
  icon: FaList,
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
      options: {source: 'title'}
    })
  ]
})
