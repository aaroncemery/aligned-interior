import {defineType, defineField} from 'sanity'
import {FaUser} from 'react-icons/fa'

export const Author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: FaUser,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageObject'
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}]
    })
  ]
})
