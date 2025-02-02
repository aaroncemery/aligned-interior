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
import {Category} from './src/schemaTypes/SettingsType/Catergory'
import {CategoryParent} from './src/schemaTypes/SettingsType/CategoryParent'
import {Testimonial} from './src/schemaTypes/objects/TestimonialType/Testimonial'
import {Author} from './src/schemaTypes/documents/Author'

const typeDefArray = [Home, Author]
const customGroupItems = [Testimonial, Author]
const globalItems = [Settings, Category, CategoryParent]

export default defineConfig([
  {
    name: 'default',
    title: 'Aligned Interior Production',

    projectId: 'qehxawm7',
    dataset: 'production',
    basePath: '/production',
    plugins: [
      structureTool({
        structure: pageStructure(typeDefArray, customGroupItems, globalItems)
      }),
      visionTool(),
      assist(),
      singletonPlugin([Home.name, Settings.name]),
      vercelDeployTool()
    ],

    schema: {
      types: schemaTypes
    }
  },
  {
    name: 'development',
    title: 'Aligned Interior Development',

    projectId: 'qehxawm7',
    dataset: 'development',
    basePath: '/dev',
    plugins: [
      structureTool({
        structure: pageStructure(typeDefArray, customGroupItems, globalItems)
      }),
      visionTool(),
      assist(),
      singletonPlugin([Home.name, Settings.name]),
      vercelDeployTool()
    ],

    schema: {
      types: schemaTypes
    }
  }
])
