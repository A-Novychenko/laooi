'use client';

import { useState } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

import { AccessMenu } from '@/components/base';
import { CircleButton, Logo, SearchInput } from '@/components/ui';

import CloseIcon from '~/icons/close.svg';
import MenuIcon from '~/icons/menu.svg';

import { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  dict: { placeholder, accessibilityMenu },
  children,
  logoAlt,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CircleButton className="" action={() => setIsOpen(true)}>
        <MenuIcon width={16} height={16} />
      </CircleButton>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/20" />

        <div className="fixed inset-0 flex w-screen">
          <DialogPanel className="flex size-full max-h-[708px] max-w-[580px] flex-col gap-4 rounded-[24px] bg-bgLight px-4 py-6 md:px-10 md:py-4">
            <div className="flex items-center justify-between rounded-[120px] px-4 py-1 shadow-mobMenuHeader">
              <AccessMenu dict={accessibilityMenu} />

              <Logo lang={lang} logoAlt={logoAlt} />

              <CircleButton
                className="bg-transparent"
                action={() => setIsOpen(false)}
              >
                <CloseIcon width={24} height={24} />
              </CircleButton>
            </div>

            <SearchInput placeholder={placeholder} />

            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
