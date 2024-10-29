'use client';

import { ButtonLink } from '@/components/ui';

import TrashIcon from '~/icons/trash.svg';

export const TestBtn = () => {
  return (
    <ButtonLink
      icon={false}
      type="button"
      settings={{
        action: () => {
          console.log('Button clicked!');
        },
      }}
    >
      Click me BTN! <TrashIcon width={24} height={24} />
    </ButtonLink>
  );
};
