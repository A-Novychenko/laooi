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
        <Title className="mb-4">{title}</Title>

        <div className="flex flex-col gap-2 md:gap-4 xl:flex-row">
          <Image
            src={img}
            alt={alt}
            width={524}
            height={524}
            className="h-[288px] shrink-0 rounded-2xl object-cover md:size-[688px] xl:size-[588px]"
          />

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
