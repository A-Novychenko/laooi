'use client';

import { SwiperSlide, Swiper } from 'swiper/react';

import { makeSliderConfig } from '@/utils/makeSliderConfig';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderProps } from './types';
import { SliderButton } from '../SliderButton';

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
          <SliderButton
            ariaLabel="swipe-left"
            direction="prev"
            customClassName="slider-prev-btn-post bg-bgSlideBtn pointer-events-auto absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2  items-center justify-center rounded-full md:size-12 xl:size-14"
          />
          <SliderButton
            ariaLabel="swipe-right"
            direction="next"
            customClassName="slider-next-btn-post bg-bgSlideBtn pointer-events-auto absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2  items-center justify-center rounded-full md:size-12 xl:size-14"
          />
        </>
      )}
    </>
  );
};
