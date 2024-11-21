import { ReactNode } from 'react';

export type MobileMenuProps = {
  children: ReactNode;
  dict: {
    accessibilityMenu: IAccessibilityMenu;
    placeholder: string;
  };
  lang: string;
  logoAlt: string;
  mainNav: IMainNav[];
};
