import { Title } from '@/components/ui';

import { cn } from '@/utils/cn';

import { StrategySectionProps } from './types';

import styles from './StrategySection.module.css';

export const StrategySection: React.FC<StrategySectionProps> = ({ dict }) => {
  const { title, strategy } = dict.strategySection;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <ul className="flex flex-col gap-[16px] xl:flex-row xl:flex-wrap">
          {strategy &&
            strategy.map((item, idx) => (
              <li
                key={idx}
                className={cn(
                  'rounded-[20px] bg-bgLightSlate p-6 md:p-8 xl:w-[740px] xl:shrink-0 xl:p-10 xl:first:w-[524px]',
                  styles.card,
                )}
              >
                <Title
                  tag={'h3'}
                  style={'third'}
                  className="mb-2 uppercase text-bgAccentDark"
                >
                  {item.title}
                </Title>

                <p className="text-base/normal xl:text-lg/normal">
                  {item.description}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
