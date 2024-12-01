import { ReactNode } from 'react';

export type PostLabelProps = {
  label: string;
  children: ReactNode;
  typeStyle?: 'primary' | 'secondary';
  className?: string;
};
