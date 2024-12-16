import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Документи')
        .child(
          S.documentTypeList('documents')
            .title('Документи')
            .defaultOrdering([
              { field: 'category', direction: 'asc' },
              { field: 'index', direction: 'desc' },
            ]),
        ),

      ...S.documentTypeListItems().filter(item => item.getId() !== 'documents'),
    ]);
