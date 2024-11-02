import Link from 'next/link';

import { FooterNavListProps } from './types';

export const FooterNavList: React.FC<FooterNavListProps> = ({
  children,
  data,
  lang,
}) => {
  return (
    <div className="flex flex-col sm:items-center sm:justify-center md:items-start">
      <p className="mb-1 text-sm/normal font-bold uppercase text-textFooterAccent md:mb-2 xl:text-lg xl:font-semibold">
        {children}
      </p>

      <ul className="flex flex-col sm:items-center sm:justify-center md:items-start">
        {data &&
          data.map((item: IFooterNavEmbedded, idx: number) => {
            return (
              <li key={idx}>
                <Link
                  className="block py-[7px] text-sm/normal font-semibold text-textLight transition-colors duration-300 hover:text-textFooterAccent active:text-textActive xl:text-base"
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
