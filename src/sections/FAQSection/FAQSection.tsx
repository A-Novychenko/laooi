import { Accordion } from '@/components/ui/Accordion';

import staticData from '@/data/common.json';

export const FAQSection: React.FC = () => {
  const { FAQ } = staticData;

  return (
    <section className="section">
      <div className="container">
        <Accordion data={FAQ} className="xl:items-center" />
      </div>
    </section>
  );
};
