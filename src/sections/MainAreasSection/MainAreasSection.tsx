import { Title } from '@/components/ui';
import { MainAreasSectionProps } from './types';
import Image from 'next/image';

export const MainAreasSection: React.FC<MainAreasSectionProps> = ({ dict }) => {
  const {
    title,
    logo: { src, alt },
    areas,
  } = dict.mainAreasSection;
  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>
        <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap md:justify-center">
          <li className="md:w-[308px] xl:w-[416px]">
            <div className="h-[279px] overflow-hidden rounded-3xl md:h-[307px] xl:h-[296]">
              <Image
                src={src}
                alt={alt}
                width={416}
                height={296}
                className="size-full object-cover"
              />
            </div>
          </li>
          {areas.map((item, idx) => (
            <li
              key={idx}
              className="rounded-3xl bg-bgLightSlate p-[24px] md:min-h-[307px] md:w-[308px] md:p-[32px] xl:min-h-[296px] xl:w-[416px] xl:p-[40px]"
            >
              <Title
                tag={'h3'}
                style={'third'}
                className="mb-2 uppercase text-textMenuAccent md:text-[20px] xl:text-[24px]"
              >
                {item.title}
              </Title>
              <p className="text-base/[1.38] md:text-lg/[1.39]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
