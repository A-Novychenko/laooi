import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllPosts } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

const MediaPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: { page?: string };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel } = dict.common;
  const { title, errorData } = dict.blogSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const posts = await getAllPosts(lang, page, pageSize);

  const totalPosts = await getAllPosts(lang, 1, 99999);
  const totalPages = Math.ceil(totalPosts.length / pageSize);

  return (
    <>
      {posts && posts.length > 0 ? (
        <BlogGallerySection
          title={title}
          posts={posts}
          lang={lang}
          readMoreLabel={readMoreLabel}
          currentPage={page}
          totalPages={totalPages}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default MediaPage;
