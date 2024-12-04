import { PlaceholderSection, PostSection } from '@/sections';

import { getPostBySlug, getAllPosts } from '@/actions/sanity';
import { getDictionary } from '@/utils/dictionaries';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  const staticParams =
    posts?.map(({ slug }) => {
      return {
        slug,
      };
    }) || [];

  return staticParams;
}

const PostPage = async ({
  params: { lang, slug },
}: {
  params: { lang: 'uk' | 'en'; slug: string };
}) => {
  const post = await getPostBySlug(slug, lang);

  const dict = await getDictionary(lang);

  const { title, errorData } = dict.blogSection;
  const { postBackLink } = dict.common;

  return (
    <>
      {post ? (
        <PostSection post={post} postBackLink={postBackLink} />
      ) : (
        <PlaceholderSection data={{ title, ...errorData }} />
      )}
    </>
  );
};

export default PostPage;
