import { ReactNode } from 'react';

export type FooterSocialListProps = {
  title: string;
  data: ISocialLinksItem[];
  linkTitle: string;
};

export type FooterSocialListLinkProps = {
  href: string;
  children: ReactNode;
};
