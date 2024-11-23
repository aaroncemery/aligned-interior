import {defineField, defineType} from 'sanity'
import {GiNinjaHeroicStance} from 'react-icons/gi'

export const Hero = defineType({
  name: 'hero',
  title: 'Hero',
  icon: GiNinjaHeroicStance,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image'
    })
  ],
  preview: {
    select: {
      title: 'title',
      backgroundImage: 'backgroundImage'
    },
    prepare({title, backgroundImage}) {
      return {
        title,
        subtitle: 'Hero',
        media: backgroundImage ?? GiNinjaHeroicStance
      }
    }
  }
})
