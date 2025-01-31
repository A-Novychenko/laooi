import { PartnersGallery, Title } from '@/components/ui';

import { StrategyDonorsSectionProps } from './types';

export const StrategyDonorsSection: React.FC<StrategyDonorsSectionProps> = ({
  dict,
  donors,
}) => {
  const { title } = dict.donorsSection;
  return (
    <section className="section xl:pb-32">
      <div className="container">
        <Title className="mb-4">{title}</Title>

        <PartnersGallery items={donors} />
      </div>
    </section>
  );
};
