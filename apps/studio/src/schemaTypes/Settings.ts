import {defineField, defineType} from 'sanity'
import {FaCog, FaSearch} from 'react-icons/fa'

export const Settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: FaCog,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      icon: FaSearch
    }
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    })
  ],
  preview: {
    prepare: () => ({
      title: 'Site Settings'
    })
  }
})
