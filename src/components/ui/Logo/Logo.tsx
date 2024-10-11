import Image from 'next/image';
import Link from 'next/link';

import LogoIcon from '~/logo.png';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ lang, logoAlt }) => {
  return (
    <Link href={`/${lang}/`}>
      <Image src={LogoIcon} width={56} height={56} alt={logoAlt} />
    </Link>
  );
};
