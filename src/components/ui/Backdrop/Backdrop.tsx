'use client';
export const Backdrop = () => {
  const handleBackdropClose = () => {
    const expandedCard = document.querySelector('[data-expanded="true"]');

    if (expandedCard) {
      expandedCard.setAttribute('data-expanded', 'false');
    }

    const backdropElement = document.querySelector('[data-team-backdrop]');

    if (backdropElement) {
      backdropElement.classList.remove('team-backdrop');
    }
  };

  return <div data-team-backdrop onClick={handleBackdropClose}></div>;
};
