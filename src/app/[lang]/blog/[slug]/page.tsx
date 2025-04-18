import { BlogSection, PlaceholderSection, PostSection } from '@/sections';

import { getPostBySlug, getAllPosts, getLatestPosts } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

import makeMetaData from '@/data/meta';

export const revalidate = 3600;

export async function generateStaticParams() {
  const { posts } = await getAllPosts();

  const staticParams =
    posts?.map(({ slug }) => {
      return {
        slug,
      };
    }) || [];

  return staticParams;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) {
  const lang = params.lang || 'uk';

  const meta = await makeMetaData(lang, 'blog', params.slug);

  return meta;
}

const PostPage = async ({
  params: { lang, slug },
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) => {
  const post = await getPostBySlug(slug, lang);

  const latestPosts = await getLatestPosts(lang);

  const dict = await getDictionary(lang);

  const { pageName, title, link, errorData } = dict.blogSection;
  const { postBackLink, postFBLinkLabel } = dict.common;

  return (
    <>
      {post ? (
        <PostSection
          post={post}
          postBackLink={postBackLink}
          postFBLinkLabel={postFBLinkLabel}
        />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}

      <BlogSection
        dict={dict}
        lang={lang}
        pageName={pageName}
        title={title}
        link={link}
        posts={latestPosts}
      />
    </>
  );
};

export default PostPage;
