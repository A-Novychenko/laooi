import { Title } from '@/components/ui';

import { StrategySectionProps } from './types';

export const StrategySection: React.FC<StrategySectionProps> = ({ dict }) => {
  const { title, strategy } = dict.strategySection;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <ul className="flex flex-col gap-4 xl:flex-row">
          {strategy.map((item, idx) => (
            <li
              key={idx}
              className="rounded-[20px] bg-bgLightSlate p-6 md:p-8 xl:p-10"
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
