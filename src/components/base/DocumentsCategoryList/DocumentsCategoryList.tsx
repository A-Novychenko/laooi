import { DocumentCard, Title } from '@/components/ui';

import { DocumentsCategoryListProps } from './types';

import styles from './DocumentsCategoryList.module.css';

export const DocumentsCategoryList: React.FC<DocumentsCategoryListProps> = ({
  categoryTitle,
  documents,
  fileLinks,
}) => {
  return (
    <>
      {documents && documents.length > 0 && (
        <>
          <Title
            style="second"
            className="mb-2 text-2xl/normal md:mb-[12px] xl:mb-4"
          >
            {categoryTitle}
          </Title>

          <ul className="flex flex-col items-stretch gap-[8px] md:flex-row md:flex-wrap md:gap-[12px] xl:gap-[16px]">
            {documents &&
              documents
                .sort((a, b) => (b.index || 1) - (a.index || 1))
                .map((doc, idx) => (
                  <li key={idx} className={styles.card}>
                    <DocumentCard doc={doc} fileLinks={fileLinks} />
                  </li>
                ))}
          </ul>
        </>
      )}
    </>
  );
};
