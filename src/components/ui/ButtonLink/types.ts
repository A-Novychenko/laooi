import { ReactNode } from 'react';

type LinkSettings = {
  href: string;
  externalLink: boolean;
};

type ButtonSettings = {
  action: () => void;
};

export type ButtonProps = {
  children: ReactNode;
  typeStyle?: 'primary' | 'secondary' | 'light' | 'transparent';

  icon?: boolean;
  className?: string;
} & (
  | { type: 'link'; settings: LinkSettings }
  | { type: 'button'; settings: ButtonSettings }
);