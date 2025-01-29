import { Title } from '@/components/ui';
import { PartnersSliderWrap } from '@/components/base';

import { DonorsMainSectionProps } from './types';

export const DonorsMainSection: React.FC<DonorsMainSectionProps> = ({
  dict,
  donors,
}) => {
  const {
    donorsSection: { title },
  } = dict;

  return (
    <section className="section">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <PartnersSliderWrap data={donors} />
      </div>
    </section>
  );
};
