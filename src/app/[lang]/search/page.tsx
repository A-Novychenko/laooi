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
  const { readMoreLabel, teamClosedLabel, searchInput } = dict.common;
  const { fileLinks } = dict.documentsSection;
  const { labelTitle } = dict.tendersSection;

  const searchQuery = searchParams.searchQuery || '';

  const searchResults = await getSearchGlobal(searchQuery, lang);

  return (
    <>
      {searchResults && searchResults.length > 0 ? (
        <>
          <SearchSection
            lang={lang}
            searchResults={searchResults}
            categoryTitles={categoryTitles}
            linksTitle={linksTitle}
            readMoreLabel={readMoreLabel}
            fileLinks={fileLinks}
            labelTitle={labelTitle}
            teamClosedLabel={teamClosedLabel}
            mainTitle={mainTitle}
            searchInputPlaceholder={searchInput.placeholder}
          />
        </>
      ) : (
        <PlaceholderSection data={{ title: mainTitle, ...errorData }} />
      )}
    </>
  );
};

export default SearchPage;
