import {MdOutlineFeaturedVideo} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export const FeatureSection = defineType({
  name: 'featureSection',
  title: 'Feature Section',
  type: 'object',
  icon: MdOutlineFeaturedVideo,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'internalDescription',
      title: 'Internal Description',
      description: 'This will be used for CMS purposes',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Title', value: 'h2'},
            {title: 'Normal', value: 'normal'}
          ],
          lists: [],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [
              {
                title: 'Internal Link',
                type: 'object',
                fields: [
                  {
                    name: 'reference',
                    title: 'Reference',
                    type: 'reference',
                    to: [{type: 'page'}]
                  }
                ]
              },
              {
                title: 'External Link',
                type: 'object',
                fields: [{name: 'url', title: 'URL', type: 'url'}]
              }
            ]
          }
        }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageObject'
    })
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image'
    },
    prepare({title, image}) {
      return {
        title,
        subtitle: 'Feature Section',
        media: image?.image ?? MdOutlineFeaturedVideo
      }
    }
  }
})
