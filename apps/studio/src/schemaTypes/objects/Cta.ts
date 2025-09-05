import {BsFillMegaphoneFill} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export const Cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  icon: BsFillMegaphoneFill,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'reference',
      to: [{type: 'page'}, {type: 'blogPage'}]
    })
  ]
})
