import { getSearchGlobal } from '@/actions/sanity';

import { PlaceholderSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const SearchPage = async ({
  params: { lang },
  searchParams,
}: {
  params: {
    lang: 'uk' | 'en';
  };
  searchParams: {
    searchQuery: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { mainTitle, errorData } = dict.searchSection;

  const searchQuery = searchParams.searchQuery || '';

  const searchResults = await getSearchGlobal(searchQuery, lang);

  return (
    <>
      {searchResults && searchResults.length > 0 ? (
        <>
          <h1>{mainTitle}</h1>
        </>
      ) : (
        <PlaceholderSection data={{ title: mainTitle, ...errorData }} />
      )}
    </>
  );
};

export default SearchPage;
