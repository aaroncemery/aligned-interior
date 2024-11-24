import {defineField, defineType} from 'sanity'

export const ImageObject = defineType({
  name: 'imageObject',
  title: 'Image Object',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          rows: 2
        })
      ],
      options: {
        hotspot: true,
        collapsed: false,
        storeOriginalFilename: true,
        aiAssist: {
          imageDescriptionField: 'alt'
        }
      }
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text'
    })
  ]
})
