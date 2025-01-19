import {CgExternal, CgInternal} from 'react-icons/cg'
import {FaLink} from 'react-icons/fa'
import {defineArrayMember, defineType} from 'sanity'

export const RichBlockDefault = defineType({
  name: 'richBlockDefault',
  title: 'Rich Block Default',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal'
        },
        {
          title: 'H1',
          value: 'h1'
        },
        {
          title: 'H2',
          value: 'h2'
        },
        {
          title: 'H3',
          value: 'h3'
        },
        {
          title: 'H4',
          value: 'h4'
        },
        {
          title: 'H5',
          value: 'h5'
        },
        {
          title: 'H6',
          value: 'h6'
        },
        {
          title: 'Quote',
          value: 'blockquote'
        }
      ],
      lists: [
        {
          title: 'Bullet',
          value: 'bullet'
        },
        {
          title: 'Numbered',
          value: 'number'
        }
      ],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong'
          },
          {
            title: 'Emphasis',
            value: 'em'
          }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External Link',
            icon: CgExternal,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) => Rule.uri({scheme: ['http', 'https', 'mailto', 'tel']})
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            icon: CgInternal,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  // Add your internal document types that can be linked to
                  {type: 'page'},
                  {type: 'home'}
                ]
              },
              {
                name: 'anchor',
                type: 'string',
                title: 'Anchor',
                description: 'Optional ID to scroll to (without the #)',
                validation: (Rule) =>
                  Rule.regex(/^[a-zA-Z0-9-_]+$/)
                    .optional()
                    .warning('Anchor should only contain letters, numbers, underscores, or dashes')
              }
            ]
          }
        ]
      }
    })
  ]
})
