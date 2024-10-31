import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import { NavEmbeddedLink } from '@/components/ui';

import { AccordionMenuProps } from './types';

export const AccordionMenu: React.FC<AccordionMenuProps> = ({
  children,
  data,
}) => {
  return (
    <Disclosure as="li">
      <DisclosureButton className="flex items-center p-[10px] text-sm font-semibold transition-colors hover:text-textAccent focus:text-textAccent xl:text-lg">
        {children}
      </DisclosureButton>

      <DisclosurePanel className="ml-4" as="ul">
        <NavEmbeddedLink data={data} />
      </DisclosurePanel>
    </Disclosure>
  );
};
