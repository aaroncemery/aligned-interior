import {GiAccordion} from 'react-icons/gi'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const AccordionItem = defineType({
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  icon: GiAccordion,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'url',
                    title: 'URL',
                    name: 'link'
                  }
                ]
              }
            ]
          }
        })
      ]
    })
  ]
})
