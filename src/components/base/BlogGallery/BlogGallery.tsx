import { PostCard } from '@/components/ui';

import { GalleryPostProps } from './types';

export const BlogGallery: React.FC<GalleryPostProps> = ({
  posts,
  lang,
  readMoreLabel,
  notFoundDescr,
}) => {
  return (
    <>
      {posts && posts.length > 0 ? (
        <ul className="flex flex-col items-center gap-[16px] md:flex-row md:flex-wrap">
          {posts.map(post => {
            return (
              <li
                className="max-w-[448px] md:w-[336px] xl:w-[416px] smOnly480:max-w-full"
                key={post.slug}
              >
                <PostCard
                  post={post}
                  lang={lang}
                  readMoreLabel={readMoreLabel}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-[16px] md:flex-row md:flex-wrap">
          <div className="flex w-full justify-center py-8 text-center">
            <p className="w-full text-base/normal md:w-[453px] xl:w-[506px] xl:text-lg">
              {notFoundDescr}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
