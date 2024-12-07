import { PostCard } from '@/components/ui';

import { GalleryPostProps } from './types';

export const BlogGallery: React.FC<GalleryPostProps> = ({
  posts,
  lang,
  readMoreLabel,
}) => {
  return (
    <ul className="flex flex-col items-center gap-[16px] md:flex-row md:flex-wrap">
      {posts &&
        posts.map((post, idx) => {
          return (
            <li className="md:w-[336px] xl:w-[416px]" key={idx}>
              <PostCard post={post} lang={lang} readMoreLabel={readMoreLabel} />
            </li>
          );
        })}
    </ul>
  );
};
