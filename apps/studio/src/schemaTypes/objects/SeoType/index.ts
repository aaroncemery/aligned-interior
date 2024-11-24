import {defineField, defineType} from 'sanity'

export const SeoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image'
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'robots',
      title: 'Robots',
      type: 'string'
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url'
    })
  ]
})
