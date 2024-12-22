import Image from 'next/image';
import Link from 'next/link';

import LaooiLogo from '~/images/bigLogo.png';
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
      <div className="mb-4 flex flex-col items-center justify-center gap-4 rounded-2xl bg-bgLightSlate p-6 md:p-8 xl:p-10">
        <p className="text-sm/normal font-bold uppercase text-textSecondary xl:text-lg xl:font-semibold">
          {title}
        </p>

        <ul className="flex flex-col gap-4 md:flex-row">
          {links &&
            links.map((link, idx) => {
              const IconComponent = icons[idx];

              return (
                <li key={idx} className="flex items-center gap-2">
                  <span className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-bgSocialIcon text-textLight transition-colors hover:bg-bgSlate hover:text-bgDark focus:bg-bgSlate focus:text-bgDark active:bg-bgDarkSlate">
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

      <div className="xl:w-[524px]">
        <Image
          src={LaooiLogo}
          width={688}
          height={684}
          alt="big logo organization"
        />
      </div>
    </div>
  );
};
