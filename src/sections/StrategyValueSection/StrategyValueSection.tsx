import Image from 'next/image';

import { Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import staticData from '@/data/common.json';

import { StrategyValueSectionProps, ValueItem } from './types';

export const StrategyValueSection: React.FC<StrategyValueSectionProps> = ({
  dict,
}) => {
  const { title, values, templateValue } = dict.strategyValueSection;

  const { strategyLogo } = staticData;

  const getMarkupArr = () => {
    const markupArray = [];

    values.forEach((item, index) => {
      if (index === 0 || index % 2 === 0) {
        markupArray.push({
          isLogo: true,
          logo: strategyLogo,
          title: templateValue.title,
          description: templateValue.description,
        });
      }
      markupArray.push({ ...item, isLogo: false, logo: strategyLogo });
    });

    markupArray.push({
      isLogo: true,
      logo: strategyLogo,
      title: templateValue.title,
      description: templateValue.description,
    });

    return markupArray;
  };

  const finallyArr: ValueItem[] = getMarkupArr();

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <ul className="flex flex-col gap-[16px] md:flex-row md:flex-wrap md:justify-center">
          {finallyArr.map((value: ValueItem, idx) => (
            <li
              key={idx}
              className={cn(
                'min-h-[10.75rem] overflow-hidden rounded-3xl bg-bgLightSlate p-[24px] md:min-h-[11.75rem] md:w-[308px] md:p-[32px] xl:min-h-[15.5rem] xl:w-[308px] xl:p-[40px]',
                {
                  'flex items-center justify-center bg-bgLight p-0 md:p-0 xl:p-0':
                    value.isLogo,
                },
              )}
            >
              <div
                className={cn('h-[172px] md:h-[188px] xl:h-[248px]', {
                  'visually-hidden': !value.isLogo,
                })}
              >
                <Image
                  src={value.logo}
                  alt={templateValue.title}
                  width={308}
                  height={248}
                  className="size-full object-cover"
                />
              </div>

              <Title
                tag={'h3'}
                style={'third'}
                className={cn('mb-2 text-textMenuAccent xl:text-[24px]', {
                  'visually-hidden': value.isLogo,
                })}
              >
                {value.title}
              </Title>

              <p
                className={cn('text-base/normal xl:text-lg/normal', {
                  'visually-hidden': value.isLogo === true,
                })}
              >
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
