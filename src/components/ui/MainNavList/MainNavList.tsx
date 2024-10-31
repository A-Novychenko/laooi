import Link from 'next/link';

import { AccordionMenu, TooltipMenu } from '@/components/ui';

import ArrowDownIcon from '~/icons/arrowDown.svg';

import { MainNavListProps } from './types';

export const MainNavList: React.FC<MainNavListProps> = ({ lang, mainNav }) => {
  return (
    <nav>
      <ul className="flex flex-col gap-4 xl:flex-row xl:items-center">
        {mainNav &&
          mainNav.map(({ name, href, embedded }, idx: number) => {
            const data =
              embedded &&
              embedded.map(el => ({ ...el, href: `/${lang}${el.href}` }));

            return (
              <li key={idx} className="flex">
                {!data && (
                  <Link
                    href={`/${lang}${href}`}
                    className="p-[10px] text-sm font-semibold transition-colors hover:text-textAccent focus:text-textAccent xl:text-lg"
                  >
                    {name}
                  </Link>
                )}

                {data && (
                  <>
                    <div className="hidden xl:block">
                      <TooltipMenu data={data}>
                        {name} <ArrowDownIcon width={24} height={24} />
                      </TooltipMenu>
                    </div>

                    <ul className="block xl:hidden">
                      <AccordionMenu data={data}>
                        {name} <ArrowDownIcon width={19} height={19} />
                      </AccordionMenu>
                    </ul>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
