import { sanityClient } from '@/sanity/lib/client';

import { getResearchDocumentsQuery } from '../queries';

const fetchDocuments = async (): Promise<IDocument[]> => {
  const data = await sanityClient.fetch(getResearchDocumentsQuery);

  return data ? data : [];
};

export const getResearchDocuments = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedResearchDocument[]> => {
  try {
    const documents = await fetchDocuments();

    const transformedDocuments: ITransformedResearchDocument[] = documents.map(
      doc => ({
        title: doc.title[lang],
        index: doc.index,
        fileUrl: doc.fileUrl,
      }),
    );

    return transformedDocuments;
  } catch (error) {
    console.error('Помилка при пошуку research документів:', error);

    return [];
  }
};
