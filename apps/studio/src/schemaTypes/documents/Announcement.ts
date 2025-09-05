import {defineField, defineType, defineArrayMember} from 'sanity'
import {IoMdMegaphone} from 'react-icons/io'

export const Announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: IoMdMegaphone,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'}
          ],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'}
            ],
            annotations: []
          }
        })
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'popup',
      title: 'Show as Popup',
      type: 'boolean',
      initialValue: false,
      description: 'Show this announcement as a popup'
    })
  ]
})
