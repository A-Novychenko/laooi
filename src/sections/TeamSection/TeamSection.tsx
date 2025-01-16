import { TeamCard } from '@/components/ui';

import { TeamSectionProps } from './types';

export const TeamSection: React.FC<TeamSectionProps> = ({ dict, team }) => {
  const { readMoreLabel } = dict.common;

  return (
    <section className="section">
      <div className="container">
        <ul className="flex flex-wrap gap-[16px]">
          {team &&
            team.length > 0 &&
            team.map((teamMember, idx) => (
              <TeamCard
                key={idx}
                teamMember={teamMember}
                readMoreLabel={readMoreLabel}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};
