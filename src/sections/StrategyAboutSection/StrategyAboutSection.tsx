import Image from 'next/image';

import { Title } from '@/components/ui';

import { StrategyAboutSectionProps } from './types';

export const StrategyAboutSection: React.FC<StrategyAboutSectionProps> = ({
  dict,
}) => {
  const { title, img, alt, description } = dict.strategyAboutSection;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4" tag="h1">
          {title}
        </Title>

        <div className="flex flex-col gap-2 md:gap-4 xl:flex-row">
          <div className="shrink-0 overflow-hidden rounded-2xl md:max-h-[688px] xl:sticky xl:top-[7.5rem] xl:size-auto xl:max-h-min">
            <Image
              src={img}
              alt={alt}
              width={524}
              height={524}
              className="size-full object-cover xl:size-auto"
            />
          </div>

          <div className="flex flex-col gap-5 rounded-2xl bg-bgLightSlate p-6 md:p-8 xl:gap-8 xl:p-10">
            {description.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="text-base/normal text-textPrimary xl:text-lg/normal"
                >
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
