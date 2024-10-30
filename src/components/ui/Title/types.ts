import { ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
  style?: 'main' | 'second' | 'third';
  className?: string;
  hidden?: boolean;
};
