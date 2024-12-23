import Image from 'next/image';
import Link from 'next/link';

import logoIcon from '~/logo.png';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({
  lang,
  logoAlt,
  classNameImage,
  classNameLink,
}) => {
  return (
    <Link href={`/${lang}/`} className={classNameLink}>
      <Image
        src={logoIcon}
        width={80}
        height={80}
        alt={logoAlt}
        priority
        className={classNameImage}
      />
    </Link>
  );
};
