import {fields} from './fields'
import {Home} from './Home'
import {Settings} from './Settings'
import {objects} from './objects'
import {AccordionType} from './objects/AccordionType'
import {testimonialTypes} from './objects/TestimonialType'
import Page from './Page'

export const schemaTypes = [
  Home,
  Page,
  ...objects,
  ...fields,
  ...testimonialTypes,
  ...AccordionType,
  Settings
]
