/* eslint-disable @typescript-eslint/no-explicit-any */
import { makePostType } from './makePostType';

export const transformPostPreview = (
  post: IPostPreview,
  lang: 'uk' | 'en' = 'uk',
): ITransformedPostPreview => {
  return {
    type: post.postType,
    label: makePostType(post.postType, lang),
    image: post.images[0]?.asset.url,
    imageAlt: post.images[0]?.caption[lang],
    title: post.title[lang],
    body: post.body[lang] as string,
    date: post.publicationDate,
    slug: post.slug.current,
    postUrl: `/${post.slug.current}`,
    linkTitle: post.title[lang],
    text: Array.isArray(post.body[lang])
      ? (post.body[lang] as any[])
          .map(
            block =>
              block.children?.map((child: any) => child.text).join(' ') || '',
          )
          .join(' ')
      : post.body[lang] || '',
  };
};
