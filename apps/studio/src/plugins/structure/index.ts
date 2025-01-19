import {contextDocumentTypeName} from '@sanity/assist'
import {type DocumentDefinition} from 'sanity'
import {ListItemBuilder, type StructureResolver} from 'sanity/structure'
import {FaGlobe} from 'react-icons/fa'

// The StructureResolver is how we're changing the DeskTool structure to
// linking to document(named Singleton) like how 'Homepage' is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
  customGroupItems: DocumentDefinition[]
): StructureResolver => {
  return (S) => {
    // Create singletons list items as before
    const singletonItems = typeDefArray
      .map((typeDef) => {
        // Skip global items as they'll be handled separately
        if (typeDef.name === 'settings' || typeDef.name === 'notFoundPage') {
          return null
        }
        return S.listItem()
          .title(typeDef.title!)
          .icon(typeDef.icon)
          .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name))
      })
      .filter((item): item is ListItemBuilder => item !== null) // Type predicate to ensure non-null

    // Create global folder with settings and other global singletons
    const globalItems = S.listItem()
      .title('Global')
      .icon(FaGlobe)
      .child(
        S.list()
          .title('Global')
          .items([
            // Add settings
            ...typeDefArray
              .filter((typeDef) => typeDef.name === 'settings' || typeDef.name === 'notFoundPage')
              .map((typeDef) =>
                S.listItem()
                  .title(typeDef.title!)
                  .icon(typeDef.icon)
                  .child(
                    S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name)
                  )
              )
          ])
      )

    const customItems = customGroupItems.map((item) => {
      return S.listItem()
        .title(`${item.title!}s`)
        .icon(item.icon)
        .child(
          S.documentList()
            .title(`All ${item.title}s`)
            .filter('_type == $type')
            .params({type: item.name})
        )
    })

    // The default root list items (except custom and singleton ones)
    const defaultListItems = S.documentTypeListItems().filter((listItem) => {
      const id = listItem.getId()
      if (!id) return false
      return (
        !typeDefArray.find((singleton) => singleton.name === id) &&
        !customGroupItems.find((item) => item.name === id)
      )
    })

    return S.list()
      .title('Content')
      .items([
        globalItems,
        S.divider(),
        ...singletonItems,
        S.divider(),
        ...customItems,
        S.divider(),
        ...defaultListItems.filter((item) => item.getId() !== contextDocumentTypeName)
      ])
  }
}
