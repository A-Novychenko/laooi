'use client';

import { ButtonLink } from '../ButtonLink';

import { ReadMoreBtnProps } from './types';

export const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({ readMoreLabel }) => {
  return (
    <ButtonLink
      type="button"
      typeStyle="transparent"
      settings={{ type: 'button', action: () => {} }}
    >
      {readMoreLabel}
    </ButtonLink>
  );
};
