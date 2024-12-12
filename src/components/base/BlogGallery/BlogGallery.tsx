import { PostCard } from '@/components/ui';

import { GalleryPostProps } from './types';

export const BlogGallery: React.FC<GalleryPostProps> = ({
  posts,
  lang,
  readMoreLabel,
  notFoundDescr,
}) => {
  return (
    <ul className="flex flex-col items-center gap-[16px] md:flex-row md:flex-wrap">
      {posts && posts.length > 0 ? (
        posts.map((post, idx) => {
          return (
            <li className="max-w-[448px] md:w-[336px] xl:w-[416px]" key={idx}>
              <PostCard post={post} lang={lang} readMoreLabel={readMoreLabel} />
            </li>
          );
        })
      ) : (
        <div className="flex w-full justify-center py-8 text-center">
          <p className="w-full text-base/normal md:w-[453px] xl:w-[506px] xl:text-lg">
            {notFoundDescr}
          </p>
        </div>
      )}
    </ul>
  );
};
