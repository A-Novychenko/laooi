import { Accordion, Title } from '@/components/ui';

import { FAQSectionProps } from './types';

export const FAQSection: React.FC<FAQSectionProps> = ({ dict }) => {
  const { title, items } = dict.FAQSection;

  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-12 xl:pb-32 xl:pt-16">
      <div className="container relative">
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
