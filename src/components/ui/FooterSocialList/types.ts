import { ReactNode } from 'react';

export type FooterSocialListProps = {
  title: string;
  data: ISocialLinksItem[];
};

export type FooterSocialListLinkProps = {
  href: string;
  children: ReactNode;
};
