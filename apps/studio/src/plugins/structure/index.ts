import {contextDocumentTypeName} from '@sanity/assist'
import {type DocumentDefinition} from 'sanity'
import {type StructureResolver} from 'sanity/structure'

// The StructureResolver is how we're changing the DeskTool structure to
// linking to document(named Singleton) like how 'Homepage' is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
  customGroupItems: DocumentDefinition[]
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something
    // DeskTool can understand.
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name))
    })

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
        ...singletonItems,
        S.divider(),
        ...customItems,
        S.divider(),
        ...defaultListItems.filter((item) => item.getId() !== contextDocumentTypeName)
      ])
  }
}
