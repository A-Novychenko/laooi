import { Accordion, Title } from '@/components/ui';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopBtn';

import { FAQSectionProps } from './types';

export const FAQSection: React.FC<FAQSectionProps> = ({ dict }) => {
  const { title, items } = dict.FAQSection;

  return (
    <section className="container relative pb-16 pt-8 md:pb-24 md:pt-12 xl:pb-32 xl:pt-16">
      <div className="container">
        <div className="xl:flex xl:justify-center">
          <div className="xl:inline-block">
            <Title className="mb-4 xl:w-full">{title}</Title>

            <Accordion data={items} />
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </section>
  );
};
