import { Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import styles from './MainAreasSection.module.css';

import { MainAreasSectionProps } from './types';

export const MainAreasSection: React.FC<MainAreasSectionProps> = ({ dict }) => {
  const {
    title,
    logo: { alt },
    areas,
  } = dict.mainAreasSection;

  const newAreas = [{ title: alt, description: alt }, ...areas];

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap md:justify-center">
          {newAreas.map((item, idx) => (
            <li
              key={idx}
              className={cn(
                'rounded-3xl bg-bgLightSlate p-[24px] md:min-h-[307px] md:w-[308px] md:p-[32px] xl:min-h-[296px] xl:w-[416px] xl:p-[40px]',
                styles.cardAreas,
              )}
            >
              <Title
                tag={'h3'}
                style={'third'}
                className={cn(
                  'mb-2 uppercase text-textMenuAccent md:text-[20px] xl:text-[24px]',
                  idx === 0 && 'visually-hidden',
                )}
              >
                {item.title}
              </Title>

              <p
                className={cn(
                  'text-base/[1.38] md:text-lg/[1.39]',
                  idx === 0 && 'visually-hidden',
                )}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
