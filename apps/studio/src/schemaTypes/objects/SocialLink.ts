import {defineType, defineField} from 'sanity'
import {FaLink, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export const SocialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  icon: FaLink,
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    }),
    defineField({
      name: 'socialPlatform',
      title: 'Social Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'}
        ]
      }
    })
  ],
  preview: {
    select: {
      title: 'socialPlatform',
      subtitle: 'url'
    },
    prepare({title, subtitle}) {
      return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        subtitle: subtitle || 'No URL',
        media: title === 'facebook' ? FaFacebook : title === 'instagram' ? FaInstagram : FaLinkedin
      }
    }
  }
})
