import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllTenders } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const TendersPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: {
    page?: string;
    search?: string;
    deadline?: string;
    sort?: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel, searchInput, selectSortByDate, selectPostByType } =
    dict.common;
  const { pageName, title, errorData, notFoundDescr } = dict.tendersSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const deadline: string | undefined = searchParams?.deadline
    ? searchParams.deadline
    : undefined;

  const { tenders, totalPages } = await getAllTenders(
    searchQuery,
    lang,
    page,
    pageSize,
    deadline,
    sortDate,
  );

  return (
    <div className="grow">
      {tenders ? (
        <BlogGallerySection
          title={title}
          posts={tenders}
          pageName={pageName}
          lang={lang}
          readMoreLabel={readMoreLabel}
          currentPage={page}
          totalPages={totalPages}
          placeholder={searchInput.placeholder}
          selectSortByDate={selectSortByDate}
          selectPostByType={selectPostByType}
          notFoundDescr={notFoundDescr}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </div>
  );
};

export default TendersPage;
