import { createElement } from 'react';

import { cn } from '@/utils/cn';

import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = ({
  tag = 'h2',
  style = 'second',
  className,
  children,
  hidden = false,
}) => {
  const { main, second, third } = {
    main:
      style === 'main'
        ? 'text-textSecondary text-[32px]/[1.25] font-bold md:text-[38px]/[1.26] xl:text-[54px]/[1.18]'
        : '',
    second:
      style === 'second'
        ? 'text-textSecondary text-3xl/[1.26] font-bold md:text-[36px] xl:text-[40px]'
        : '',
    third:
      style === 'third'
        ? 'font-bold text-textPrimary text-lg/normal tracking-[-0.36px] md:text-xl md:tracking-[-0.4px] xl:text-2xl xl:tracking-[-0.48px]'
        : '',
  };

  const resultStyles = hidden
    ? 'visually-hidden'
    : cn(main, second, third, className);

  return createElement(
    tag,
    { className: cn(resultStyles, className) },
    children,
  );
};
