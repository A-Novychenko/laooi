import Image from 'next/image';

import { Title, ButtonLink } from '@/components/ui';

import staticData from '@/data/common.json';

export const AboutSection: React.FC<ISectionProps> = ({
  dict: { aboutSection },
  lang,
}) => {
  const { title, img, text, link } = aboutSection;

  const { poster, posterAlt } = staticData;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <div className="xl:flex xl:gap-4">
          <div className="mb-2 shrink-0 overflow-hidden rounded-2xl md:mb-4 md:h-[688px] md:rounded-[20px] xl:mb-0 xl:h-[394px] xl:w-[632px] xl:rounded-3xl">
            <Image
              src={img?.src ? img?.src : poster}
              alt={img?.alt ? img?.alt : posterAlt}
              width={1006}
              height={669}
              className="size-full object-cover"
              priority
            />
          </div>

          <div className="rounded-2xl bg-bgLightSlate p-6 md:rounded-[20px] md:p-8 xl:flex xl:flex-col xl:rounded-3xl xl:p-10">
            <p className="mb-4 text-base/normal text-textPrimary xl:text-lg/normal">
              {text.first}
            </p>

            <p className="mb-4 text-base/normal text-textPrimary xl:text-lg/normal">
              {text.second}
            </p>

            <div className="mr-auto inline-block">
              <ButtonLink
                type="link"
                typeStyle="transparent"
                settings={{ href: `${lang}${link.href}`, externalLink: false }}
              >
                {link.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
