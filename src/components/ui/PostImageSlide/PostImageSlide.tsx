import Image from 'next/image';

import { PostImageSlideProps } from './types';

export const PostImageSlide: React.FC<PostImageSlideProps> = ({ image }) => {
  return (
    <div className="h-[288px] md:h-[688px] xl:size-[632px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={632}
        height={632}
        className="size-full object-cover"
      />
    </div>
  );
};
