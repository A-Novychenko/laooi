import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'light';
  icon?: boolean;
  className?: string;
};
