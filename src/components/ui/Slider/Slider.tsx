'use client';

import { SwiperSlide, Swiper } from 'swiper/react';

import ArrowIcon from '~/icons/arrowDown.svg';

import { makeSliderConfig } from '@/utils/makeSliderConfig';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderProps } from './types';

export const Slider: React.FC<SliderProps> = ({
  slideClassName,
  slidesData,
  slideComponent: SlideComponent,
  type,
  ...restProps
}) => {
  return (
    <>
      <Swiper {...makeSliderConfig(restProps)}>
        {slidesData.map((card, idx) => (
          <SwiperSlide
            tag="li"
            className={slideClassName}
            key={card.id ? card.id : idx}
          >
            {type === 'post' ? (
              <SlideComponent image={card} />
            ) : (
              <SlideComponent {...card} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {type === 'post' && (
        <>
          <button className="slider-prev-btn-post absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-bgSlideBtn">
            <ArrowIcon width={24} height={24} className="rotate-90" />
          </button>
          <button className="slider-next-btn-post absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-bgSlideBtn">
            <ArrowIcon width={24} height={24} className="-rotate-90" />
          </button>
        </>
      )}
    </>
  );
};
