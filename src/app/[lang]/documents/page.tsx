import { DocumentsSection, PlaceholderSection } from '@/sections';

import { getDocuments } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'documents');

  return meta;
}

const DocumentsPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const { mainTitle, errorData } = dict.documentsSection;

  const documents = await getDocuments(lang);

  return (
    <>
      {documents && documents.length > 0 ? (
        <>
          <h1 className="visually-hidden">{mainTitle}</h1>

          <DocumentsSection dict={dict} documents={documents} />
        </>
      ) : (
        <PlaceholderSection data={{ title: mainTitle, ...errorData }} />
      )}
    </>
  );
};

export default DocumentsPage;
