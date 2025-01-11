import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllProjects } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';
// import { getDonorsFromProjects } from '@/actions/sanity/methods/getDonorsFromProjects';

const ProjectsPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: {
    page?: string;
    search?: string;
    donor?: string;
    sort?: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel, searchInput, selectSortByDate, selectPostByType } =
    dict.common;
  const { pageName, title, errorData, notFoundDescr } = dict.projectsSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const donor = searchParams.donor ? searchParams.donor : undefined;

  const { projects, totalPages } = await getAllProjects(
    searchQuery,
    lang,
    page,
    pageSize,
    donor,
    sortDate,
  );

  // const donorsFromSelect = await getDonorsFromProjects(lang);

  // console.log('donorsFromSelect', donorsFromSelect);

  return (
    <div className="grow">
      {projects ? (
        <BlogGallerySection
          title={title}
          posts={projects}
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

export default ProjectsPage;
