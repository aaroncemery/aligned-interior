import {fields} from './fields'
import {Home} from './Home'
import {objects} from './objects'
import {testimonialTypes} from './objects/TestimonialType'
import Page from './Page'

export const schemaTypes = [Home, Page, ...objects, ...fields, ...testimonialTypes]
