import {
  AccessButton,
  LangSwitcher,
  MainNavList,
  SearchInput,
} from '@/components/ui';

import { getDictionary } from '@/app/[lang]/dictionaries';
import staticData from '@/data/common.json';

import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = async ({ lang }) => {
  const {
    common: { mainNav, logoAlt, searchInput },
  } = await getDictionary(lang);

  const { langCode } = staticData;

  return (
    <header>
      <div className="container">
        <div className="mx-6 my-10 flex justify-between rounded-[120px] bg-bgLight px-10 py-2">
          <MainNavList lang={lang} logoAlt={logoAlt} mainNav={mainNav} />

          <div className="flex items-center gap-6">
            <SearchInput placeholder={searchInput.placeholder} />

            <LangSwitcher lang={lang} langCode={langCode} />

            <AccessButton />
          </div>
        </div>
      </div>
    </header>
  );
};
