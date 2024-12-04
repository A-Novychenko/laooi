import { ReactNode } from 'react';

export type PostLabelProps = {
  type: string;
  children: ReactNode;
  typeStyle?: 'primary' | 'secondary';
  className?: string;
};
