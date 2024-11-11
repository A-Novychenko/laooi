'use client';

import { Slider, TargetCard } from '@/components/ui';

import { TargetSliderWrapProps } from './types';

export const TargetSliderWrap: React.FC<TargetSliderWrapProps> = ({
  targetGroups,
  className,
}) => {
  return (
    <Slider
      section="target"
      slidesData={targetGroups}
      slideComponent={TargetCard}
      wrapClassName={className}
    />
  );
};
