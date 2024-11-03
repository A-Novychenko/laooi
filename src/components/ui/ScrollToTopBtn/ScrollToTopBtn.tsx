'use client';

import { CircleButton } from '../CircleButton';

import Arrow from '~/icons/arrowBtnIcon.svg';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CircleButton action={scrollToTop} className="ml-auto">
      <Arrow className="-rotate-45" width={24} height={24} />
    </CircleButton>
  );
};
