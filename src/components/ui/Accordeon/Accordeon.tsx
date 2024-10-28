import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import { AccordeonProps } from './types';

import ArrowIcon from '~/icons/arrowDown.svg';

export const Accordeon: React.FC<AccordeonProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-[16px] px-[16px] py-[16px] sm:max-w-[288px] md:max-w-[688px] xl:max-w-[848px]">
      {data &&
        data.map((item: { title: string; text: string }, idx: number) => {
          return (
            <Disclosure
              as="li"
              className="rounded-[24px] bg-bgLightSlate sm:w-[288px] sm:px-[16px] sm:py-[16px] md:w-full md:px-[24px] xl:py-[24px]"
              key={idx}
            >
              <DisclosureButton className="group flex w-full justify-between">
                <strong className="text-start font-[600] sm:w-[224px] sm:text-base md:w-[600px] xl:text-lg">
                  {item.title}
                </strong>

                <ArrowIcon
                  width={24}
                  heigth={24}
                  className="transition-transform group-data-[open]:rotate-180"
                />
              </DisclosureButton>

              <DisclosurePanel transition className="mt-[8px] xl:mt-[16px]">
                <p className="text-sm font-[400] text-textMenuAccent xl:text-base">
                  {item.text}
                </p>
              </DisclosurePanel>
            </Disclosure>
          );
        })}
    </ul>
  );
};
