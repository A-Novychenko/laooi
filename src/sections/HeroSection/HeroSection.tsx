import Image from 'next/image';

import { ButtonLink, Title } from '@/components/ui';

export const HeroSection: React.FC<ISectionProps> = ({ dict, lang }) => {
  const { title, descr, link, img } = dict.heroSection;

  return (
    <section className="section">
      <div className="container">
        <div className="xl:flex xl:items-center xl:gap-4">
          <div className="mb-4 xl:mb-0">
            <Title style="main" tag="h1" className="mb-1 md:mb-2">
              {title}
            </Title>

            <p className="mb-2 md:mb-4 xl:max-w-[506px] xl:text-lg/normal">
              {descr}
            </p>

            <div className="mx-auto md:mx-0 md:max-w-[237px] xl:max-w-[360px] xl:whitespace-nowrap">
              <ButtonLink
                type="link"
                settings={{
                  href: `${lang}/${link.settings.href}`,
                  externalLink: false,
                }}
              >
                {link.label}
              </ButtonLink>
            </div>
          </div>

          <div className="md:h-[610px] md:w-[688px] xl:shrink-0">
            <Image
              width={1376}
              height={1220}
              src={img.src}
              alt={img.alt}
              priority
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
