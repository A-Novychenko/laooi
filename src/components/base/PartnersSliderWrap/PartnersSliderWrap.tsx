'use client';

import { Slider, PartnersCard } from '@/components/ui';

import { PartnersSliderWrapProps } from './types';

export const PartnersSliderWrap: React.FC<PartnersSliderWrapProps> = ({
  data,
  className,
}) => {
  return (
    <Slider
      section="partners"
      slidesData={data}
      slideComponent={PartnersCard}
      wrapClassName={className}
    />
  );
};
