import { Backdrop, TeamCard, Title } from '@/components/ui';

import { TeamSectionProps } from './types';

export const TeamSection: React.FC<TeamSectionProps> = ({ dict, team }) => {
  const { readMoreLabel, teamClosedLabel, teamGalleryTitle } = dict.common;

  return (
    <section className="section xl:pb-32">
      <div className="container">
        <Title className="visually-hidden">{teamGalleryTitle}</Title>

        <ul className="flex flex-wrap content-stretch gap-[16px]">
          {team &&
            team.length > 0 &&
            team.map((teamMember, idx) => (
              <TeamCard
                key={idx}
                teamMember={teamMember}
                readMoreLabel={readMoreLabel}
                teamClosedLabel={teamClosedLabel}
              />
            ))}
        </ul>
      </div>

      <Backdrop />
    </section>
  );
};
