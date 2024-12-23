import Link from 'next/link';

import { TooltipMenu } from '@/components/ui';
import { AccordionMenu } from '@/components/base';

import ArrowDownIcon from '~/icons/arrowDown.svg';

import { MainNavListProps } from './types';

export const MainNavList: React.FC<MainNavListProps> = ({
  lang,
  mainNav,
  handleClose,
}) => {
  return (
    <nav>
      <ul className="flex flex-col gap-[16px] xl:flex-row xl:items-center">
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
                    onClick={handleClose}
                    className="p-[10px] text-sm font-semibold transition-colors hover:text-textAccent focus:text-textAccent xl:text-lg"
                  >
                    {name}
                  </Link>
                )}

                {data && (
                  <>
                    <div className="hidden xl:block">
                      <TooltipMenu data={data} handleClose={handleClose}>
                        {name}
                        <ArrowDownIcon
                          width={24}
                          height={24}
                          className="mt-[2px]"
                        />
                      </TooltipMenu>
                    </div>

                    <ul className="block xl:hidden">
                      <AccordionMenu data={data} handleClose={handleClose}>
                        {name}
                        <ArrowDownIcon width={19} height={19} />
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
