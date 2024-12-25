import { DocumentsCategoryList } from '@/components/base';

import { DocumentsSectionProps } from './types';

export const ResearchSection: React.FC<DocumentsSectionProps> = ({
  dict,
  documents,
}) => {
  const { fileLinks, categoryTitle } = dict.researchSection;

  return (
    <section className="section section-documents">
      <div className="container">
        <div className="py-4 md:py-6 xl:py-8">
          <DocumentsCategoryList
            categoryTitle={categoryTitle}
            documents={documents}
            fileLinks={fileLinks}
            cardType="research"
          />
        </div>
      </div>
    </section>
  );
};
