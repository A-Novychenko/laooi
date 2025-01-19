'use client';

import { useState } from 'react';
import { ButtonLink } from '../ButtonLink';

import { ReadMoreBtnProps } from './types';

export const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({
  readMoreLabel,
  className,
  cardId,
  type,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    const cardElement = document.querySelector(`[data-id="${cardId}"]`);
    if (cardElement) {
      const expanded = cardElement.getAttribute('data-expanded') === 'true';
      cardElement.setAttribute('data-expanded', expanded ? 'false' : 'true');
      setIsExpanded(!expanded);
    }
  };

  return (
    <div className={className}>
      <ButtonLink
        type="button"
        typeStyle="transparent"
        settings={{
          type: 'button',
          action: type === 'team' ? handleClick : () => {},
        }}
      >
        {isExpanded ? 'Close' : readMoreLabel}
      </ButtonLink>
    </div>
  );
};
