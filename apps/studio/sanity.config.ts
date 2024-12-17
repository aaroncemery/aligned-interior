import {assist} from '@sanity/assist'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {singletonPlugin} from './src/plugins/singletons'
import {pageStructure} from './src/plugins/structure'
import {schemaTypes} from './src/schemaTypes'
import {Home} from './src/schemaTypes/Home'
import {Testimonial} from './src/schemaTypes/objects/TestimonialType/Testimonial'

export default defineConfig({
  name: 'default',
  title: 'Aligned Interior',

  projectId: 'qehxawm7',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: pageStructure([Home], [Testimonial])
    }),
    visionTool(),
    assist(),
    singletonPlugin([Home.name])
  ],

  schema: {
    types: schemaTypes
  }
})
