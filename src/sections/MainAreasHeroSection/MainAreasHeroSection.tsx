import Image from 'next/image';

import { Title } from '@/components/ui';

import { MainAreasHeroSectionProps } from './types';

export const MainAreasHeroSection: React.FC<MainAreasHeroSectionProps> = ({
  dict,
}) => {
  const {
    title,
    image: { alt, src },
    description: { after, before },
  } = dict.mainAreasHeroSection;

  return (
    <section className="section">
      <div className="container relative">
        <Title tag={'h1'} className="mb-4">
          {title}
        </Title>

        <div className="flex flex-col gap-[8px] md:gap-[16px] xl:flex-row xl:items-start">
          <div className="flex h-[288px] overflow-hidden rounded-2xl md:size-[688px] xl:sticky xl:size-[632px]">
            <Image
              width={632}
              height={632}
              alt={alt}
              src={src}
              className="size-full shrink-0 object-cover"
              priority
            />
          </div>

          <div className="rounded-2xl bg-bgLightSlate p-6 md:p-[32px] xl:inline-block xl:w-[632px] xl:p-[40px]">
            <p className="text-base/[1.3] xl:text-lg/[1.35]">
              <span className="font-bold">{before}</span>
              &nbsp;-&nbsp;{after}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
