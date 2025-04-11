import {FaFile, FaHome, FaSearch} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const Home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: FaHome,
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: FaFile
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: FaSearch
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      group: 'content'
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'pageBuilder',
      group: 'content'
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    })
  ]
})
