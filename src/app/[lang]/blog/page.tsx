import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllPosts, getTotalPostsCount } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';
import { getSearchPost } from '@/actions/sanity/methods/getSearchPost';

const BlogPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: { page?: string; search?: string };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel } = dict.common;
  const { title, errorData } = dict.blogSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';

  // const posts = await getAllPosts(lang, page, pageSize);

  const posts = searchQuery
    ? await getSearchPost(searchQuery, lang) // Отримуємо пости по пошуковому слову
    : await getAllPosts(lang, page, pageSize);

  const totalCountPosts = await getTotalPostsCount();

  const totalPages = Math.ceil(totalCountPosts / pageSize);

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

export default BlogPage;
