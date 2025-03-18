import {TfiLayoutAccordionSeparated} from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'

export const AccordionSection = defineType({
  name: 'accordionSection',
  title: 'Accordion Section',
  type: 'object',
  icon: TfiLayoutAccordionSeparated,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'subtitle',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              
            ]
          }
        }
      ]
    }),
    defineField({name: 'image', type: 'imageObject'}),
    defineField({name: 'items', type: 'array', of: [{type: 'accordionItem'}]})
  ]
})
