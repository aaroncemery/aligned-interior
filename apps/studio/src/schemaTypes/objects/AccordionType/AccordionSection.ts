import {TfiLayoutAccordionSeparated} from 'react-icons/tfi'
import {defineField, defineType} from 'sanity'

export const AccordionSection = defineType({
  name: 'accordionSection',
  title: 'Accordion Section',
  type: 'object',
  icon: TfiLayoutAccordionSeparated,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ]
          }
        }
      ]
    }),
    defineField({name: 'image', type: 'imageObject'}),
    defineField({name: 'items', type: 'array', of: [{type: 'accordionItem'}]})
  ]
})
