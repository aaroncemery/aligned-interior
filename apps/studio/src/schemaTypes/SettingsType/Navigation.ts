import {defineField, defineType} from 'sanity'
import {FaCompass} from 'react-icons/fa'

export const Navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  icon: FaCompass,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'page'}, {type: 'home'}, {type: 'blogListingPage'}]},
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'label'},
            {type: 'string', name: 'url'}
          ]
        }
      ]
    })
  ]
})
