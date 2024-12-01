import { NewsPostSection } from '@/sections';

import { getDictionary } from '@/utils/dictionaries';

const NewsPost = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  const { postBackLink } = dict.common;
  const { posts } = dict.galleryNewsSection;

  return (
    <main className="flex grow flex-col">
      <NewsPostSection linkTitle={postBackLink} post={posts[0]} />
    </main>
  );
};

export default NewsPost;
