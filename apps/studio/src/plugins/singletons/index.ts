/**
 * This plugin contains all the logic for setting up the singletons
 */

import {type DocumentActionComponent} from 'sanity'

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      newDocumentOptions: (
        prev: {templateId: string}[],
        {creationContext}: {creationContext: {type: string}}
      ) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => !types.includes(templateItem.templateId))
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: DocumentActionComponent[], {schemaType}: {schemaType: string}) => {
        if (types.includes(schemaType)) {
          return prev.filter(({action}) => action !== 'duplicate')
        }

        return prev
      }
    }
  }
}
