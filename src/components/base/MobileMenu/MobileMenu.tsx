'use client';

import { useState } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

import { CircleButton, Logo, SearchInput } from '@/components/ui';
import { AccessMenu, MainNavList } from '@/components/base';

import CloseIcon from '~/icons/close.svg';
import MenuIcon from '~/icons/menu.svg';

import { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  dict: { placeholder, accessibilityMenu },
  children,
  logoAlt,
  lang,
  mainNav,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CircleButton action={() => setIsOpen(true)}>
        <MenuIcon width={16} height={16} />
      </CircleButton>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/20" />

        <div className="fixed inset-0 flex w-screen">
          <DialogPanel className="mx-auto size-full max-h-[540px] max-w-screen-md overflow-y-auto rounded-b-[24px] bg-bgLight py-4 md:max-h-[548px]">
            <div className="container">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between rounded-[120px] px-4 shadow-mobMenuHeader md:py-1">
                  <AccessMenu dict={accessibilityMenu} />

                  <Logo
                    lang={lang}
                    logoAlt={logoAlt}
                    classNameImage="size-[56px]"
                  />

                  <CircleButton
                    className="bg-transparent"
                    action={() => setIsOpen(false)}
                  >
                    <CloseIcon width={24} height={24} />
                  </CircleButton>
                </div>

                <SearchInput placeholder={placeholder} lang={lang} />

                <div className="grow overflow-y-auto">
                  <MainNavList
                    lang={lang}
                    mainNav={mainNav}
                    handleClose={handleClose}
                  />
                </div>

                {children}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
