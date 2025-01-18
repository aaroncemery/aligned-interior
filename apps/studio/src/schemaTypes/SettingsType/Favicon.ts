import {defineField, defineType} from 'sanity'
import {FaIcons} from 'react-icons/fa'

export const Favicon = defineType({
  name: 'favicon',
  title: 'Favicon',
  type: 'object',
  icon: FaIcons,
  fields: [
    defineField({
      name: 'svg',
      title: 'SVG Favicon',
      type: 'image',
      description: 'Upload SVG favicon (recommended)'
    }),
    defineField({
      name: 'png96',
      title: 'PNG Favicon',
      type: 'image',
      description: 'Upload PNG favicon (96x96)'
    }),
    defineField({
      name: 'ico',
      title: 'ICO Favicon',
      type: 'file',
      description: 'Upload ICO favicon'
    }),
    defineField({
      name: 'appleTouchIcon',
      title: 'Apple Touch Icon',
      type: 'image',
      description: 'Upload Apple Touch Icon (180x180)'
    })
  ]
})
