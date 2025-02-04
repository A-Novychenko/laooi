import { getSearchGlobal } from '@/actions/sanity';

import { PlaceholderSection, SearchSection } from '@/sections';

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

  const { mainTitle, errorData, categoryTitles, linksTitle } =
    dict.searchSection;

  const searchQuery = searchParams.searchQuery || '';

  const searchResults = await getSearchGlobal(searchQuery, lang);

  return (
    <>
      {searchResults && searchResults.length > 0 ? (
        <>
          <h1 className="visually-hidden">{mainTitle}</h1>

          <SearchSection
            lang={lang}
            searchResults={searchResults}
            categoryTitles={categoryTitles}
            linksTitle={linksTitle}
          />
        </>
      ) : (
        <PlaceholderSection data={{ title: mainTitle, ...errorData }} />
      )}
    </>
  );
};

export default SearchPage;
