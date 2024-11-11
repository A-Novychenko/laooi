import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import { SliderProps } from '@/components/ui/Slider/types';

enum Sections {
  TARGET = 'target',
  CERTIFICATES = 'partners',
}

export const makeSliderConfig = ({
  section,
  wrapClassName,
}: Partial<SliderProps>) => {
  const slidesPerViewBase = 1;

  const spaceBetweenBase = 16;

  const autoplayBase =
    section === Sections.TARGET
      ? { delay: 2000, disableOnInteraction: false }
      : false;

  let loopBase: boolean;

  let spaceBetweenTab: number;
  let slidesPerViewTab: number;

  let slidesPerViewDesk: number;
  let spaceBetweenDesk: number;

  switch (section) {
    case Sections.TARGET:
      loopBase = true;

      slidesPerViewTab = 3;
      spaceBetweenTab = 16;

      slidesPerViewDesk = 5;
      spaceBetweenDesk = 16;

      break;

    default:
      loopBase = false;

      spaceBetweenTab = 16;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 3;
      spaceBetweenDesk = 24;
  }

  return {
    className: wrapClassName,
    updateOnWindowResize: true,
    wrapperTag: 'ul',
    modules: [Navigation, Autoplay, Pagination],
    speed: 800,
    lazyPreloadPrevNext: 1,
    navigation: {
      prevEl: `.slider-prev-btn-${section}`,
      nextEl: `.slider-next-btn-${section}`,
    },
    allowTouchMove: true,
    loop: loopBase,
    spaceBetween: spaceBetweenBase,
    slidesPerView: slidesPerViewBase,
    autoplay: autoplayBase,

    breakpoints: {
      768: {
        spaceBetween: spaceBetweenTab,
        slidesPerView: slidesPerViewTab,
      },
      1360: {
        slidesPerView: slidesPerViewDesk,
        spaceBetween: spaceBetweenDesk,
      },
    },
  };
};
