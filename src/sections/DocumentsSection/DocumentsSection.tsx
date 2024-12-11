import { DocumentsCategoryList } from '@/components/base';

import { DocumentsSectionProps } from './types';

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  dict,
  documents,
}) => {
  const { categories, fileLinks } = dict.documentsSection;

  const selectDocumentsCategory = (category: string) => {
    if (!Array.isArray(documents)) return [];

    return documents.filter(doc => doc.category === category);
  };

  return (
    <section className="section section-documents">
      <div className="container">
        <ul>
          {categories &&
            categories.map(({ category, title }, idx) => {
              const documentsByCategory = selectDocumentsCategory(category);

              return (
                <li key={idx} className="py-4 md:py-6 xl:py-8">
                  <DocumentsCategoryList
                    categoryTitle={title}
                    documents={documentsByCategory}
                    fileLinks={fileLinks}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
