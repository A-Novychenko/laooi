import { FooterNavList } from '@/components/ui/FooterNavList/FooterNavList';

import { getDictionary } from '@/utils/dictionaries';

import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = async ({ lang }) => {
  const {
    common: {
      footerNav: { footerAbout, footerActivities, footerOther },
    },
  } = await getDictionary(lang);

  return (
    <footer className="text-zinc-50">
      {/* <div className="container"> */}
      <nav>
        <ul className="mb-4 flex flex-col gap-4 rounded-tl-3xl rounded-tr-3xl bg-bgDark py-8 md:mb-0 md:flex-row md:justify-around md:px-4 md:py-10 xl:px-10">
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
      {/* </div> */}
    </footer>
  );
};
