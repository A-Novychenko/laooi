import Link from 'next/link';
import { FooterSocialListLinkProps } from './types';

export const FooterSocialListLink: React.FC<FooterSocialListLinkProps> = ({
  children,
  href,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full w-full items-center justify-center"
    >
      {children}
    </Link>
  );
};
