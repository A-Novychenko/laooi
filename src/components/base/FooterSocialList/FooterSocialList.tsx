import Link from 'next/link';

import InstagramIcon from '~/icons/instagram.svg';
import FacebookIcon from '~/icons/facebook.svg';
import YouTubeIcon from '~/icons/youtube.svg';
import ArrowBtnIcon from '~/icons/arrowBtnIcon.svg';

import { FooterSocialListProps } from './types';

export const FooterSocialList: React.FC<FooterSocialListProps> = ({
  title,
  data,
  linkTitle,
  lang,
}) => {
  const icons = [YouTubeIcon, FacebookIcon, InstagramIcon];

  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
      <p className="mb-1 text-sm/normal font-bold uppercase text-textFooterAccent md:mb-2 xl:mb-4">
        {title}
      </p>

      <ul className="mb-6 flex items-center justify-start gap-2 md:mb-14 xl:mb-[80px]">
        {data &&
          data.map((item, idx) => {
            const IconComponent = icons[idx];

            return (
              <li
                key={idx}
                className="flex size-10 overflow-hidden rounded-full bg-bgSocialIcon text-textLight transition-colors hover:bg-bgSlate hover:text-bgDark focus:bg-bgSlate focus:text-bgDark active:bg-bgDarkSlate"
              >
                <Link
                  href={item.settings.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-full items-center justify-center"
                  aria-label={item.name}
                >
                  <IconComponent width={24} height={24} />
                </Link>
              </li>
            );
          })}
      </ul>

      <Link
        href={{
          pathname: `/${lang}/contacts`,
          query: { ref: 'become-a-partner' },
        }}
        className="flex items-center justify-center text-sm/normal font-bold uppercase text-textFooterLink transition-colors hover:text-textFooterActive focus:text-textFooterActive xl:text-lg xl:font-semibold"
      >
        {linkTitle}
        <ArrowBtnIcon width={24} height={24} />
      </Link>
    </div>
  );
};
