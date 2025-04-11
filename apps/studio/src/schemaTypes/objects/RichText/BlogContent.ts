import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'blogContent',
  title: 'Blog Content',
  type: 'object',
  fields: [
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
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'}
          ],
          lists: [],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}]
          }
        }),
        defineArrayMember({
          type: 'imageObject'
        })
      ]
    })
  ]
})
