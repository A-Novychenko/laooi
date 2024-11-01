import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import ArrowIcon from '~/icons/arrowDown.svg';

import { AccordionItemProps } from './types';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  item: { title, text },
  defaultOpen = false,
}) => {
  return (
    <Disclosure
      as="li"
      className="w-[288px] rounded-3xl bg-bgLightSlate px-4 py-4 md:w-[688px] md:px-6 xl:w-[846px] xl:py-6"
      defaultOpen={defaultOpen}
    >
      <DisclosureButton className="group flex w-full justify-between">
        <span className="w-[224px] text-start text-base/normal font-semibold md:w-auto xl:text-lg">
          {title}
        </span>

        <ArrowIcon
          width={24}
          height={24}
          className="transition-transform group-data-[open]:rotate-180"
        />
      </DisclosureButton>

      <DisclosurePanel
        transition
        className="mt-2 origin-top transition duration-200 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 xl:mt-4"
      >
        <p className="text-sm font-normal text-textMenuAccent xl:text-base">
          {text}
        </p>
      </DisclosurePanel>
    </Disclosure>
  );
};