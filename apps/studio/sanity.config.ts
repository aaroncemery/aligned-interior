import {assist} from '@sanity/assist'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

import {singletonPlugin} from './src/plugins/singletons'
import {pageStructure} from './src/plugins/structure'
import {schemaTypes} from './src/schemaTypes'
import {Home} from './src/schemaTypes/Home'
import {Settings} from './src/schemaTypes/SettingsType/Settings'
import {Testimonial} from './src/schemaTypes/objects/TestimonialType/Testimonial'

const typeDefArray = [Home, Settings]
const customGroupItems = [Testimonial]

export default defineConfig({
  name: 'default',
  title: 'Aligned Interior',

  projectId: 'qehxawm7',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: pageStructure(typeDefArray, customGroupItems)
    }),
    visionTool(),
    assist(),
    singletonPlugin([Home.name, Settings.name]),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes
  }
})
