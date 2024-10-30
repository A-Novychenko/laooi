import { LangSwitcher, MainNavList, SearchInput } from '@/components/ui';
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
        <div className="mx-6 my-10 flex justify-between rounded-[120px] bg-bgLight px-10 py-2">
          <MainNavList lang={lang} logoAlt={logoAlt} mainNav={mainNav} />

          <div className="flex items-center gap-4">
            <SearchInput desktop placeholder={searchInput.placeholder} />

            <AccessMenu dict={accessibilityMenu} />

            <LangSwitcher lang={lang} langCode={langCode} />
          </div>
        </div>
      </div>
    </header>
  );
};
