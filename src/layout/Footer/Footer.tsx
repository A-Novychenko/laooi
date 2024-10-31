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
      <div className="mb-4 flex flex-col gap-4 rounded-tl-3xl rounded-tr-3xl bg-bgDark py-8 md:mb-0 md:flex-row md:justify-around md:px-4 md:py-10 xl:px-10">
        <FooterNavList data={footerAbout.embedded}>
          {footerAbout.title}
        </FooterNavList>

        <FooterNavList data={footerActivities.embedded}>
          {footerActivities.title}
        </FooterNavList>

        <FooterNavList data={footerOther.embedded}>
          {footerOther.title}
        </FooterNavList>
      </div>
      {/* </div> */}
    </footer>
  );
};
