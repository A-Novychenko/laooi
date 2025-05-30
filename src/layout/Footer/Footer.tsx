import { Logo, FooterNavList } from '@/components/ui';
import { FooterBasement, FooterSocialList } from '@/components/base';

import { getDictionary } from '@/utils/dictionaries';

import staticData from '@/data/common.json';

import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const {
    common: {
      footerNav: { footerAbout, footerActivities, footerOther },
      socialListTitle,
      socialLinks,
      logoAlt,
      footerBasement,
      footerLinkTitle,
    },
  } = await getDictionary(lang);

  return (
    <footer>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 rounded-t-3xl bg-bgDark py-8 md:flex md:flex-row md:flex-wrap md:items-start md:justify-evenly md:px-4 md:py-10 xl:justify-between xl:px-10">
          <div className="shrink-0">
            <Logo
              lang={lang}
              logoAlt={logoAlt}
              classNameImage="size-[80px]"
              classNameLink="rounded-full bg-bgLight flex size-[80px]"
            />
          </div>

          <nav>
            <ul className="mb-4 flex flex-col items-center justify-center gap-4 text-center md:mb-0 md:flex-row md:items-start md:justify-between xl:gap-[130px]">
              <li className="flex">
                <FooterNavList data={footerAbout.embedded} lang={lang}>
                  {footerAbout.title}
                </FooterNavList>
              </li>

              <li className="flex">
                <FooterNavList data={footerActivities.embedded} lang={lang}>
                  {footerActivities.title}
                </FooterNavList>
              </li>

              <li className="flex">
                <FooterNavList data={footerOther.embedded} lang={lang}>
                  {footerOther.title}
                </FooterNavList>
              </li>
            </ul>
          </nav>

          <FooterSocialList
            data={socialLinks}
            title={socialListTitle}
            linkTitle={footerLinkTitle}
            lang={lang}
          />
        </div>

        <FooterBasement
          data={footerBasement}
          staticData={staticData}
          lang={lang}
        />
      </div>
    </footer>
  );
};
