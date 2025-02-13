import { BlogGallerySection, PlaceholderSection } from '@/sections';

import { getAllPosts } from '@/actions/sanity';

import { getDictionary } from '@/utils/dictionaries';

export const revalidate = 3600;

enum PostType {
  News = 'news',
  Articles = 'articles',
  Events = 'events',
}

const BlogPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: 'uk' | 'en' };
  searchParams: {
    page?: string;
    search?: string;
    type?: 'news' | 'articles' | 'events';
    sort?: string;
  };
}) => {
  const dict = await getDictionary(lang);

  const { readMoreLabel, searchInput, selectSortByDate, selectPostByType } =
    dict.common;
  const { pageName, title, errorData, notFoundDescr } = dict.blogSection;

  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 12;

  const searchQuery = searchParams.search || '';

  const sortDate = searchParams.sort === 'oldest' ? 'oldest' : 'newest';

  const postType: PostType | undefined = Object.values(PostType).includes(
    searchParams.type as PostType,
  )
    ? (searchParams.type as PostType)
    : undefined;

  const { posts, totalPages } = await getAllPosts(
    searchQuery,
    lang,
    page,
    pageSize,
    postType,
    sortDate,
  );

  return (
    <div className="grow">
      {posts ? (
        <BlogGallerySection
          title={title}
          posts={posts}
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

export default BlogPage;
