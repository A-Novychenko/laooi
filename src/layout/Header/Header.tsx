import { LangSwitcher, Logo, SearchInput } from '@/components/ui';
import { AccessMenu, MainNavList, MobileMenu } from '@/components/base';

import { getDictionary } from '@/utils/dictionaries';

import staticData from '@/data/common.json';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = async ({ lang }) => {
  const {
    common: { mainNav, logoAlt, searchInput, accessibilityMenu },
  } = await getDictionary(lang);

  const { langCode } = staticData;

  return (
    <header className="fixed top-0 z-[9999999] w-full">
      <div className="container">
        <div className="mt-4 flex items-center justify-between rounded-[120px] bg-bgLight px-4 shadow-mobMenuHeader md:py-1 xl:mt-6 xl:px-[30px] xl:py-2">
          <div className="order-2 shrink-0 xl:-order-none">
            <Logo lang={lang} logoAlt={logoAlt} classNameImage="size-[56px]" />
          </div>

          <div className="hidden whitespace-nowrap xl:block">
            <MainNavList lang={lang} mainNav={mainNav} />
          </div>

          <div className="order-1 xl:hidden">
            <AccessMenu dict={accessibilityMenu} />
          </div>

          <div className="hidden items-center gap-[16px] xl:flex">
            <SearchInput
              desktop
              placeholder={searchInput.placeholder}
              lang={lang}
            />

            <AccessMenu dict={accessibilityMenu} />

            <div className="hidden xl:block">
              <LangSwitcher lang={lang} langCode={langCode} />
            </div>
          </div>

          <div className="order-3 xl:hidden">
            <MobileMenu
              dict={{
                accessibilityMenu,
                placeholder: searchInput.placeholder,
              }}
              lang={lang}
              logoAlt={logoAlt}
              mainNav={mainNav}
            >
              <LangSwitcher langCode={langCode} lang={lang} />
            </MobileMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
