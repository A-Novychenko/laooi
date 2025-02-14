import { MediaGallerySection, PlaceholderSection } from '@/sections';

import { getAllMediaItems } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en' };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'media');

  return meta;
}

const MediaPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: { page?: string; sort?: string; search?: string };
}) => {
  const dict = await getDictionary(lang);

  const { title, errorData, notFoundDescr } = dict.mediaSection;
  const {
    searchInput: { placeholder },
    selectSortByDate,
  } = dict.common;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 15;

  const searchQuery = searchParams.search || '';

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const { totalPages, mediaItems } = await getAllMediaItems(
    lang,
    page,
    pageSize,
    sortDate,
    searchQuery,
  );

  return (
    <div className="grow">
      {mediaItems ? (
        <MediaGallerySection
          dict={dict}
          lang={lang}
          currentPage={page}
          totalPages={totalPages}
          mediaItems={mediaItems}
          placeholder={placeholder}
          selectSortByDate={selectSortByDate}
          notFoundDescr={notFoundDescr}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </div>
  );
};

export default MediaPage;
