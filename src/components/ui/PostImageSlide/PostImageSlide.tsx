import Image from 'next/image';

import staticData from '@/data/common.json';

import { PostImageSlideProps } from './types';

export const PostImageSlide: React.FC<PostImageSlideProps> = ({ image }) => {
  const { poster, posterAlt } = staticData;

  return (
    <div className="h-[288px] md:h-[688px] xl:size-[632px]">
      <Image
        src={image?.src ? image?.src : poster}
        alt={image?.alt ? image?.alt : posterAlt}
        width={632}
        height={632}
        className="size-full object-cover"
        priority
      />
    </div>
  );
};
