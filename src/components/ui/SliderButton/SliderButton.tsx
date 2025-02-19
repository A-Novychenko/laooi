'use client';

import ArrowIcon from '~/icons/arrowDown.svg';

import { SliderButtonProps } from './types';

export const SliderButton: React.FC<SliderButtonProps> = ({
  ariaLabel,
  customClassName,
  direction,
}) => {
  const isPrev = direction === 'prev';

  return (
    <button
      aria-label={ariaLabel}
      className={`${isPrev ? 'left-3' : 'right-3'} ${customClassName}`}
    >
      <ArrowIcon
        width={24}
        height={24}
        className={isPrev ? 'rotate-90' : '-rotate-90'}
      />
    </button>
  );
};
