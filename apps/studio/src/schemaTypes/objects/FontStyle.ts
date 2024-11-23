import {defineField, defineType} from 'sanity'
import {BiFont} from 'react-icons/bi'

export const FontStyle = defineType({
  name: 'fontStyle',
  title: 'Font Style',
  icon: BiFont,
  type: 'object',
  fields: [
    defineField({
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      options: {
        list: [
          {title: 'Cinzel', value: 'cinzel'},
          {title: 'Belle Aurore', value: 'belle-aurore'}
        ]
      }
    })
  ]
})
