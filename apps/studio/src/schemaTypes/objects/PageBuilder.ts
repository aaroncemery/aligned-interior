import {defineType} from 'sanity'

export const PageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    {type: 'hero'},
    {type: 'featureSection'},
    {type: 'visualHeader'},
    {type: 'testimonialSection'}
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: 'intro',
          title: 'Intro',
          of: ['hero', 'visualHeader']
        },
        {
          name: 'content',
          title: 'Content',
          of: ['featureSection', 'visualHeader', 'testimonialSection']
        }
      ],
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.png`
        },
        {name: 'list'}
      ]
    }
  }
})
