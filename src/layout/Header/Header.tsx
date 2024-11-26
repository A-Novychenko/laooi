import {
  LangSwitcher,
  Logo,
  MainNavList,
  MobileMenu,
  SearchInput,
} from '@/components/ui';
import { AccessMenu } from '@/components/base';

import { getDictionary } from '@/utils/dictionaries';

import staticData from '@/data/common.json';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = async ({ lang }) => {
  const {
    common: { mainNav, logoAlt, searchInput, accessibilityMenu },
  } = await getDictionary(lang);

  const { langCode } = staticData;

  return (
    <header>
      <div className="container">
        <div className="my-4 flex items-center justify-between rounded-[120px] bg-bgLight px-4 shadow-mobMenuHeader md:py-1 xl:my-6 xl:px-[30px] xl:py-2">
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
            <SearchInput desktop placeholder={searchInput.placeholder} />

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
              {/* <div className="grow overflow-y-auto">
                <MainNavList lang={lang} mainNav={mainNav} />
              </div> */}

              <LangSwitcher langCode={langCode} lang={lang} />
            </MobileMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
