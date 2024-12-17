import {BsChatLeftQuoteFill} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export const Testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: BsChatLeftQuoteFill,
  fields: [
    defineField({
      name: 'title',
      title: 'InternalTitle',
      description: 'This is used for the preview in the studio',
      type: 'string'
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageObject'
    })
  ],
  preview: {
    select: {
      author: 'author',
      location: 'location',
      image: 'image'
    },
    prepare({author, location, image}) {
      return {
        title: author,
        subtitle: location,
        media: image?.image ?? BsChatLeftQuoteFill
      }
    }
  }
})
