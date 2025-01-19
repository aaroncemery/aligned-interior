import {FaExclamationTriangle} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const NotFoundPage = defineType({
  name: 'notFoundPage',
  title: 'Not Found Page',
  type: 'document',
  icon: FaExclamationTriangle,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'richBlockDefault'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    })
  ]
})
