import {type DocumentActionComponent, type DocumentDefinition} from 'sanity'
import {type StructureResolver} from 'sanity/structure'

// The StructureResolver is how we're changing the DeskTool structure to
// linking to document(named Singleton) like how 'Homepage' is handled.
export const pageStructure = (typeDefArray: DocumentDefinition[]): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something
    // DeskTool can understand.
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name))
    })

    // The default root list items (exept custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => !typeDefArray.find((singleton) => singleton.name === listItem.getId())
    )

    return S.list()
      .title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems])
  }
}
