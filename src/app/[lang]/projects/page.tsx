import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllProjects, getDonorsFromProjects } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'projects');

  return meta;
}

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
    type?: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel, searchInput, selectSortByDate, selectDonorsByType } =
    dict.common;
  const { pageName, title, errorData, notFoundDescr } = dict.projectsSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const donor = searchParams.type ? searchParams.type : undefined;

  const { projects, totalPages } = await getAllProjects(
    searchQuery,
    lang,
    page,
    pageSize,
    donor,
    sortDate,
  );

  const donorsFromSelect = await getDonorsFromProjects(lang);

  const donorsFromSelectWithOther = [
    {
      label: selectDonorsByType.generalOptions.all.label,
      value: selectDonorsByType.generalOptions.all.value,
    },
    ...donorsFromSelect,
    {
      label: selectDonorsByType.generalOptions.other.label,
      value: selectDonorsByType.generalOptions.other.value,
    },
  ];

  const selectDonorsByName = {
    title: selectDonorsByType.title,
    options: donorsFromSelectWithOther,
  };

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
          selectPostByType={selectDonorsByName}
          notFoundDescr={notFoundDescr}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </div>
  );
};

export default ProjectsPage;
