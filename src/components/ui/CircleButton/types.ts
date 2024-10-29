import { ReactNode } from 'react';

export type CircleButtonProps = {
  children: ReactNode;
  action: () => void;
  className?: string;
};
