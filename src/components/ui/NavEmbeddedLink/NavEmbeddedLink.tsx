import Link from 'next/link';

import { cn } from '@/utils/cn';

import ArrowBtnIcon from '~/icons/arrowBtnIcon.svg';

import { NavEmbeddedLinkProps } from './types';

import styles from './NavEmbeddedLink.module.css';

export const NavEmbeddedLink: React.FC<NavEmbeddedLinkProps> = ({
  data,
  handleClose,
}) => {
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map(({ href, name }, idx) => (
          <li key={idx} className="flex">
            <Link
              href={href}
              onClick={handleClose}
              className={cn(
                'whitespace-nowrap rounded-2xl bg-bgLight p-[10px] text-[12px]/normal font-semibold text-textPrimary',
                'flex grow items-center justify-between md:text-xs/normal xl:p-4 xl:text-base/normal',
                'data-[focus]:bg-bgSlate data-[hover]:bg-bgSlate data-[focus]:text-textAccent data-[hover]:text-textAccent',
                'transition-colors hover:bg-bgSlate hover:text-textAccent focus:bg-bgSlate focus:text-textAccent',
                styles.menuLink,
              )}
            >
              {name}

              <ArrowBtnIcon
                width={24}
                height={24}
                className="ml-2 text-transparent transition-colors"
              />
            </Link>
          </li>
        ))}
    </>
  );
};
