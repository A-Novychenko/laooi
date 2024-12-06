'use client';

import { PostSectionCard, Slider } from '@/components/ui';

import { PostSliderWrapProps } from './types';

export const PostSliderWrap: React.FC<PostSliderWrapProps> = ({ data }) => {
  console.log('DATA', data);
  return (
    <Slider
      section="post"
      slidesData={data}
      slideComponent={PostSectionCard}
      type="post"
      slideClassName="h-full"
    />
  );
};
