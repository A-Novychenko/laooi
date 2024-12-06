import { Navigation, Autoplay, Pagination, Keyboard } from 'swiper/modules';

import { SliderProps } from '@/components/ui/Slider/types';

enum Sections {
  TARGET = 'target',
  PARTNERS = 'partners',
  POST = 'post',
}

export const makeSliderConfig = ({
  section,
  wrapClassName,
}: Partial<SliderProps>) => {
  const slidesPerViewBase = 1;

  const spaceBetweenBase = 16;

  const autoplayBase =
    section === Sections.TARGET || section === Sections.PARTNERS
      ? { delay: 0, disableOnInteraction: false }
      : false;

  let speedBase: number;
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
      speedBase = 5000;

      break;

    case Sections.PARTNERS:
      loopBase = true;

      slidesPerViewTab = 2;
      spaceBetweenTab = 16;

      slidesPerViewDesk = 3;
      spaceBetweenDesk = 16;
      speedBase = 5000;

      break;

    case Sections.POST:
      loopBase = false;
      slidesPerViewTab = 1;
      spaceBetweenTab = 1;

      slidesPerViewDesk = 1;
      spaceBetweenDesk = 1;
      speedBase = 500;
      break;

    default:
      loopBase = false;

      spaceBetweenTab = 16;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 3;
      spaceBetweenDesk = 24;

      speedBase = 5000;
  }

  return {
    className: wrapClassName,
    updateOnWindowResize: true,
    wrapperTag: 'ul',
    modules: [Navigation, Autoplay, Pagination, Keyboard],
    speed: speedBase,
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

    centeredSlides: true,
    freeMode: true,

    keyboard:
      section === Sections.POST
        ? { enabled: true, onlyInViewport: false }
        : undefined,

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
