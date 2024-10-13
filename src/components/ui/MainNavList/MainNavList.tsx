import Link from 'next/link';

import { Logo } from '@/components/ui';

import { MainNavListProps } from './types';

export const MainNavList: React.FC<MainNavListProps> = ({
  lang,
  logoAlt,
  mainNav,
}) => {
  return (
    <nav className="flex items-center">
      <div className="mr-[64px]">
        <Logo lang={lang} logoAlt={logoAlt} />
      </div>

      <ul className="flex gap-4">
        {mainNav &&
          mainNav.map(({ name, href }, idx: number) => (
            <li key={idx}>
              <Link
                href={`/${lang}${href}`}
                className="text-medium p-[10px] font-semibold transition-colors hover:text-textAccent focus:text-textAccent"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
