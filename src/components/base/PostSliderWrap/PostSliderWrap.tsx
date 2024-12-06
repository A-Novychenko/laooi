'use client';

import { PostImageSlide, Slider } from '@/components/ui';

import { PostSliderWrapProps } from './types';

export const PostSliderWrap: React.FC<PostSliderWrapProps> = ({ data }) => {
  console.log('DATA', data);
  return (
    <Slider
      section="post"
      slidesData={data}
      slideComponent={PostImageSlide}
      type="post"
      slideClassName="h-[288px] md:h-[688px] xl:h-[632px] xl:w-[632px]"
    />
  );
};
