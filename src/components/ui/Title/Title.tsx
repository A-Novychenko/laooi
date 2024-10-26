import React from 'react';

import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = ({ children, type }) => {
  return type === 'second' ? (
    <h2 className="text-black sm:text-[30px]/[1.26] sm:font-[700] md:text-[36px] xl:text-[40px]">
      {children}
    </h2>
  ) : (
    <h3 className="font-[700] text-[#2B2D40] sm:text-[18px] sm:tracking-[-0.36px] md:text-[20px] md:tracking-[-0.4px] xl:text-[24px] xl:tracking-[-0.48px]">
      {children}
    </h3>
  );
};
