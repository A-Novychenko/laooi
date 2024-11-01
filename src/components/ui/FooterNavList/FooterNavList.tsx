import Link from 'next/link';

import { FooterNavListProps } from './types';

export const FooterNavList: React.FC<FooterNavListProps> = ({
  children,
  data,
  lang,
}) => {
  return (
    <div>
      <p className="mb-1 text-sm/normal font-bold uppercase text-textFooterAccent md:mb-2 xl:text-lg xl:font-semibold">
        {children}
      </p>

      <ul>
        {data &&
          data.map((item: IFooterNavEmbedded, idx: number) => {
            return (
              <li key={idx}>
                <Link
                  className="block py-1 text-sm/normal font-semibold text-textLight hover:text-textFooterAccent active:text-textActive xl:text-base"
                  href={`/${lang}${item.href}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};