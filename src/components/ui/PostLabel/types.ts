import { ReactNode } from 'react';

export type PostLabelProps = {
  type?: string | boolean;
  children: ReactNode;
  typeStyle?: 'primary' | 'secondary';
  className?: string;
  deadline?: string;
};
