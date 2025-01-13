import {BsChatLeftQuoteFill} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export const TestimonialSection = defineType({
  name: 'testimonialSection',
  title: 'Testimonials',
  icon: BsChatLeftQuoteFill,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}]
    })
  ]
})
