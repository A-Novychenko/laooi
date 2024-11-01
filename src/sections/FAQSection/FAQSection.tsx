import { Accordion, Title } from '@/components/ui';

import { FAQSectionProps } from './types';

export const FAQSection: React.FC<FAQSectionProps> = ({ dict }) => {
  const { title, items } = dict.FAQSection;

  return (
    <section className="section">
      <div className="container">
        <div className="xl:flex xl:justify-center">
          <div className="xl:inline-block">
            <Title className="mb-4 xl:w-full">{title}</Title>

            <Accordion data={items} />
          </div>
        </div>
      </div>
    </section>
  );
};
