import { Logo, FooterSocialList, FooterNavList } from '@/components/ui';

import { getDictionary } from '@/utils/dictionaries';

import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const {
    common: {
      footerNav: { footerAbout, footerActivities, footerOther },
      socialListTitle,
      socialLinks,
      logoAlt,
    },
  } = await getDictionary(lang);

  return (
    <footer>
      <div className="container rounded-t-3xl bg-bgDark py-8 md:flex md:flex-row md:justify-between md:px-4 md:py-10 xl:px-10">
        <Logo
          lang={lang}
          logoAlt={logoAlt}
          classNameImage="size-[80px]"
          classNameLink="rounded-full bg-bgLight flex size-[80px]"
        />

        <nav>
          <ul className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row md:justify-between xl:gap-[130px]">
            <li>
              <FooterNavList data={footerAbout.embedded} lang={lang}>
                {footerAbout.title}
              </FooterNavList>
            </li>

            <li>
              <FooterNavList data={footerActivities.embedded} lang={lang}>
                {footerActivities.title}
              </FooterNavList>
            </li>

            <li>
              <FooterNavList data={footerOther.embedded} lang={lang}>
                {footerOther.title}
              </FooterNavList>
            </li>
          </ul>
        </nav>
        <FooterSocialList data={socialLinks} title={socialListTitle} />
      </div>
    </footer>
  );
};
