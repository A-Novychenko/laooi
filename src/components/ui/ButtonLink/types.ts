import { ReactNode } from 'react';

type LinkSettings = {
  href: string;
  externalLink: boolean;
};

type ButtonSettings = {
  action: () => void;
  type?: 'button' | 'reset' | 'submit' | undefined;
};

export type ButtonProps = {
  children: ReactNode;
  typeStyle?: 'primary' | 'secondary' | 'light' | 'transparent';
  disabled?: boolean;
  teamCard?: boolean;
  isExpanded?: boolean;

  icon?: boolean;
  className?: string;
} & (
  | { type: 'link'; settings: LinkSettings }
  | { type: 'button'; settings: ButtonSettings }
);
