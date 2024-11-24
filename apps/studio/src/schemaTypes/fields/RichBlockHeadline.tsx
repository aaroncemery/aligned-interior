import {defineArrayMember, defineField, defineType} from 'sanity'

export const RichBlockHeadline = defineType({
  name: 'richBlockHeadline',
  title: 'Rich Block Headline',
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
            name: 'fontStyle',
            type: 'fontStyle'
          }
        ]
      }
    })
  ]
})
