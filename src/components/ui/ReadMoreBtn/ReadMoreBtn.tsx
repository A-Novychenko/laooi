'use client';

import { useEffect, useState } from 'react';

import { ButtonLink } from '@/components/ui';

import { ReadMoreBtnProps } from './types';

export const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({
  readMoreLabel,
  className,
  cardId,
  type,
  teamClosedLabel,
  teamCard = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // const handleClick = () => {
  //   const cardElement = document.querySelector(`[data-id="${cardId}"]`);

  //   if (cardElement) {
  //     const expanded = cardElement.getAttribute('data-expanded') === 'true';
  //     cardElement.setAttribute('data-expanded', expanded ? 'false' : 'true');
  //     setIsExpanded(!expanded);

  //     const backdropElement = document.querySelector('[data-team-backdrop]');

  //     if (backdropElement) {
  //       if (!backdropElement.classList.contains('team-backdrop')) {
  //         backdropElement.classList.add('team-backdrop');
  //       } else {
  //         backdropElement.classList.remove('team-backdrop');
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    const cardElement = document.querySelector(`[data-id="${cardId}"]`);
    if (!cardElement) return;

    const updateExpandedState = () => {
      const expanded = cardElement.getAttribute('data-expanded') === 'true';
      setIsExpanded(expanded);
    };

    const observer = new MutationObserver(updateExpandedState);
    observer.observe(cardElement, {
      attributes: true,
      attributeFilter: ['data-expanded'],
    });

    updateExpandedState();

    return () => observer.disconnect();
  }, [cardId]);

  const handleClick = () => {
    const cardElement = document.querySelector(`[data-id="${cardId}"]`);

    if (cardElement) {
      const expanded = cardElement.getAttribute('data-expanded') === 'true';
      cardElement.setAttribute('data-expanded', expanded ? 'false' : 'true');

      const backdropElement = document.querySelector('[data-team-backdrop]');
      if (backdropElement) {
        if (!backdropElement.classList.contains('team-backdrop')) {
          backdropElement.classList.add('team-backdrop');
        } else {
          backdropElement.classList.remove('team-backdrop');
        }
      }
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
        teamCard={teamCard}
        isExpanded={isExpanded}
      >
        {isExpanded ? teamClosedLabel : readMoreLabel}
      </ButtonLink>
    </div>
  );
};
