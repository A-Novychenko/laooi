import { ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
  tag: string;
  style: string;
  className?: string;
  hidden?: boolean;
};
