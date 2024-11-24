import {HiDocumentPlus} from 'react-icons/hi2'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: HiDocumentPlus,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (Internal)',
      description: 'This is the title that will be used for the page in the CMS',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required')
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'This is the slug that will be used for the page',
      type: 'slug'
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'pageBuilder'
    })
  ]
})
