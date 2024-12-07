import { ButtonLink, VideoPlayer, Title } from '@/components/ui';

import InstagramIcon from '~/icons/instagram.svg';
import FacebookIcon from '~/icons/facebook.svg';
import YouTubeIcon from '~/icons/youtube.svg';

import { SocialsSectionProps } from './types';

export const SocialsSection: React.FC<SocialsSectionProps> = ({ dict }) => {
  const {
    common: { socialLinks },
    socialSection: { title, descr, videoUrl, poster },
  } = dict;

  const icons = [YouTubeIcon, FacebookIcon, InstagramIcon];

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <div className="xl:flex xl:gap-4">
          <div className="mb-4 rounded-[16px] bg-bgLightSlate p-6 md:p-8 xl:mb-0 xl:flex xl:w-[632px] xl:flex-col xl:justify-center xl:p-[40px]">
            <p className="mb-4 text-lg/normal xl:mb-6">{descr}</p>

            <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-[16px]">
              {socialLinks &&
                socialLinks.map(({ name, label, settings }, idx) => {
                  const IconComponent = icons[idx];

                  return (
                    <li
                      key={idx}
                      className="w-full md:max-w-[240px] xl:max-w-[182px]"
                    >
                      <ButtonLink
                        type="link"
                        settings={settings}
                        icon={false}
                        typeStyle={
                          name === 'instagram' ? 'secondary' : 'primary'
                        }
                        className={
                          name === 'youtube'
                            ? 'bg-bgAccentStrongDark hover:bg-black focus:bg-black'
                            : ''
                        }
                      >
                        {label}
                        <IconComponent width={24} height={24} />
                      </ButtonLink>
                    </li>
                  );
                })}
            </ul>
          </div>

          <VideoPlayer videoUrl={videoUrl} poster={poster} />
        </div>
      </div>
    </section>
  );
};
