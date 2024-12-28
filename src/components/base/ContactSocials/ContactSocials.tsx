import Link from 'next/link';

import InstagramIcon from '~/icons/instagram.svg';
import FacebookIcon from '~/icons/facebook.svg';
import YouTubeIcon from '~/icons/youtube.svg';

import { ContactSocialsProps } from './types';

export const ContactSocials: React.FC<ContactSocialsProps> = ({
  links,
  title,
}) => {
  const icons = [YouTubeIcon, FacebookIcon, InstagramIcon];

  return (
    <div className="xl:w-[524px]">
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-bgLightSlate p-6 md:p-8 xl:p-10">
        <p className="text-sm/normal font-bold uppercase text-textSecondary xl:text-lg xl:font-semibold">
          {title}
        </p>

        <ul className="flex flex-col gap-[16px] md:flex-row">
          {links &&
            links.map((link: ISocialLinksItem, idx) => {
              const IconComponent = icons[idx];

              return (
                <li key={idx} className="flex items-center gap-[8px]">
                  <span className="flex size-[40px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-bgAccentDark text-textLight transition-colors hover:bg-bgAccentStrongDark focus:bg-bgAccentStrongDark active:bg-bgAccentStrongDark">
                    <IconComponent width={24} height={24} />
                  </span>

                  <Link
                    href={link.settings.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base/normal font-semibold xl:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
