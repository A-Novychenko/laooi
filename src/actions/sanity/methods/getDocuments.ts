import { sanityClient } from '@/sanity/lib/client';

import { getDocumentsQuery } from '../queries';

const fetchDocuments = async (): Promise<IDocument[]> => {
  const data = await sanityClient.fetch(getDocumentsQuery);

  return data ? data : [];
};

export const getDocuments = async (
  lang: 'uk' | 'en' = 'uk',
): Promise<ITransformedDocument[]> => {
  try {
    const documents = await fetchDocuments();

    const transformedDocuments: ITransformedDocument[] = documents.map(doc => ({
      title: doc.title[lang],
      category: doc.category,
      fileUrl: doc.fileUrl,
    }));

    return transformedDocuments;
  } catch (error) {
    console.error('Помилка при пошуку документів:', error);

    return [];
  }
};
