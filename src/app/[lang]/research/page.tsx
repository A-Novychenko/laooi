import { PlaceholderSection, ResearchSection } from '@/sections';

import { getResearchDocuments } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'research');

  return meta;
}

const ResearchPage = async ({
  params: { lang },
}: {
  params: { lang: 'uk' | 'en' };
}) => {
  const dict = await getDictionary(lang);

  const { mainTitle, errorData } = dict.researchSection;

  const documents = await getResearchDocuments(lang);

  return (
    <>
      {documents && documents.length > 0 ? (
        <>
          <h1 className="visually-hidden">{mainTitle}</h1>

          <ResearchSection dict={dict} documents={documents} />
        </>
      ) : (
        <PlaceholderSection data={{ title: mainTitle, ...errorData }} />
      )}
    </>
  );
};

export default ResearchPage;
