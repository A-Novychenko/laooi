'use client';

import { Fragment } from 'react';
import Link from 'next/link';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { cn } from '@/utils/cn';

import ArrowBtnIcon from '~/icons/arrowBtnIcon.svg';

import { DropdownMenuProps } from './types';

import styles from './DropdownMenu.module.css';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  dataForButtons,
  dataForLinks,
  menuPosition = 'bottom start',
}) => {
  return (
    <Menu>
      <MenuButton as={Fragment}>{children}</MenuButton>

      <MenuItems
        anchor={menuPosition}
        className={cn(
          'flex flex-col rounded-[24px] bg-bgLight p-4',
          `${styles.menuWrap}`,
        )}
      >
        {dataForButtons &&
          dataForButtons.length > 0 &&
          dataForButtons.map(({ action, text, className, icon }, idx) => (
            <MenuItem key={idx}>
              <button
                onClick={action}
                className={cn(
                  'flex min-w-[232px] grow gap-2 rounded-2xl bg-bgLight p-4 text-sm/normal font-bold text-textPrimary',
                  'data-[focus]:bg-bgSlate data-[hover]:bg-bgSlate data-[focus]:text-textMenuAccent data-[hover]:text-textMenuAccent',
                  className,
                )}
              >
                {icon}
                {text}
              </button>
            </MenuItem>
          ))}

        {dataForLinks &&
          dataForLinks.length > 0 &&
          dataForLinks.map(({ href, text, className }, idx) => (
            <MenuItem key={idx}>
              <Link
                href={href}
                className={cn(
                  'flex grow items-center justify-between rounded-2xl bg-bgLight p-4 text-base/normal font-semibold text-textPrimary',
                  'data-[focus]:bg-bgSlate data-[hover]:bg-bgSlate data-[focus]:text-textAccent data-[hover]:text-textAccent',
                  styles.menuLink,
                  className,
                )}
              >
                {text}
                <ArrowBtnIcon
                  width={24}
                  height={24}
                  className="text-transparent"
                />
              </Link>
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
};
