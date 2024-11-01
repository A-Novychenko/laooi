import { FooterSocialListLink } from './FooterSocialListLink';

import InstagramIcon from '~/icons/instagram.svg';
import FacebookIcon from '~/icons/facebook.svg';
import YouTubeIcon from '~/icons/youtube.svg';

import { FooterSocialListProps } from './types';

export const FooterSocialList: React.FC<FooterSocialListProps> = ({
  title,
  data,
}) => {
  const icons = [YouTubeIcon, FacebookIcon, InstagramIcon];

  return (
    <div className="text-center">
      <p className="mb-1 text-sm/normal font-bold uppercase text-textFooterAccent md:mb-2 xl:mb-4">
        {title}
      </p>

      <ul className="flex items-center justify-center gap-2">
        {data &&
          data.map((item, idx) => {
            const IconComponent = icons[idx];

            return (
              <li
                key={idx}
                className="overflow:hidden flex h-10 w-10 rounded-full bg-bgSocialIcon text-textLight transition-colors hover:bg-bgSlate hover:text-bgDark focus:bg-bgSlate focus:text-bgDark active:bg-bgDarkSlate"
              >
                <FooterSocialListLink href={item.settings.href}>
                  <IconComponent width={24} height={24} />
                </FooterSocialListLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
