import {fields} from './fields'
import {Home} from './Home'
import {objects} from './objects'
import {AccordionType} from './objects/AccordionType'
import {testimonialTypes} from './objects/TestimonialType'
import Page from './Page'
import {settingsTypes} from './SettingsType'
import {blogTypes} from './BlogType'
import {documentTypes} from './documents'

export const schemaTypes = [
  Home,
  Page,
  ...objects,
  ...fields,
  ...testimonialTypes,
  ...AccordionType,
  ...settingsTypes,
  ...blogTypes,
  ...documentTypes
]
