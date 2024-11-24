import {PiFlagBannerBold} from 'react-icons/pi'
import {defineField, defineType} from 'sanity'

export const VisualHeader = defineType({
  name: 'visualHeader',
  title: 'Visual Header',
  type: 'object',
  icon: PiFlagBannerBold,
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      description: 'This is used for the preview in the studio',
      type: 'string'
    }),
    defineField({
      name: 'headline',
      type: 'richBlockHeadline'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageObject'
    })
  ],
  preview: {
    select: {
      title: 'internalTitle',
      image: 'image'
    },
    prepare({title, image}) {
      return {
        title,
        subtitle: 'Visual Header',
        media: image?.image ?? PiFlagBannerBold
      }
    }
  }
})
