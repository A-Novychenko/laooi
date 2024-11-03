'use client';
import { useEffect, useState } from 'react';

import { CircleButton } from '../CircleButton';

import Arrow from '~/icons/arrowBtnIcon.svg';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CircleButton
      action={scrollToTop}
      className={`scroll-to-top group ${isVisible ? 'visible' : ''} ml-auto mt-3`}
    >
      <Arrow className="-rotate-45" width={24} height={24} />
    </CircleButton>
  );
};
