import { Title } from '@/components/ui';
import { StrategyValueSectionProps, ValueItem } from './types';
import Image from 'next/image';

export const StrategyValueSection: React.FC<StrategyValueSectionProps> = ({
  dict,
}) => {
  const { title, values } = dict.strategyValueSection;

  const getMarkupArr = () => {
    const markupArray = [];
    const logo = '/images/poster.jpg';

    values.forEach((item, index) => {
      if (index === 0 || index % 2 === 0) {
        markupArray.push({ isLogo: true, logo });
      }
      markupArray.push({ ...item, isLogo: false });
    });

    markupArray.push({ isLogo: true, logo });

    return markupArray;
  };

  const finallyArr: ValueItem[] = getMarkupArr();

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>
        <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
          {finallyArr.map((value: ValueItem, idx) =>
            value.isLogo ? (
              <li
                key={idx}
                className="h-[172px] self-center md:h-[188px] md:w-[308px] xl:h-[248px]"
              >
                <Image
                  src={value.logo || '/images/poster.jpg'}
                  alt="logo"
                  width={308}
                  height={248}
                  className="shrink-0 object-cover xl:h-[248px]"
                />
              </li>
            ) : (
              <li
                key={idx}
                className="min-h-[172px] rounded-3xl bg-bgLightSlate p-6 md:min-h-[188px] md:w-[308px] md:p-8 xl:min-h-[248px] xl:w-[308px] xl:p-[40px]"
              >
                <Title
                  tag={'h3'}
                  style={'third'}
                  className="mb-2 text-textMenuAccent xl:text-[24px]"
                >
                  {value.title}
                </Title>
                <p className="text-base/normal xl:text-lg/normal">
                  {value.description}
                </p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
