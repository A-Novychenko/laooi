'use client';

import { Fragment, useState } from 'react';
import { Collapse } from 'react-collapse';

import { Disclosure, DisclosureButton } from '@headlessui/react';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrowDown.svg';

import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({ data, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <ul className={cn('flex flex-col gap-4', className)}>
      {data &&
        data.map((item: { question: string; answer: string }, idx: number) => {
          const isOpen = openIndex === idx;

          return (
            <Disclosure as={Fragment} defaultOpen={idx === 0} key={idx}>
              <li className="max-w-[448px] origin-top rounded-3xl bg-bgLightSlate p-4 md:w-[688px] md:max-w-full md:px-6 md:py-4 xl:w-[846px] xl:py-6">
                <DisclosureButton
                  className="group flex w-full justify-between"
                  onClick={() => handleToggle(idx)}
                >
                  <span className="text-start text-base/normal font-semibold md:w-auto xl:text-lg">
                    {item.question}
                  </span>

                  <ArrowIcon
                    width={24}
                    height={24}
                    className={cn('transition-transform duration-300', {
                      'rotate-180': isOpen,
                    })}
                  />
                </DisclosureButton>

                <Collapse isOpened={isOpen}>
                  <div>
                    <p className="overflow-hidden text-sm font-normal text-textMenuAccent xl:text-base">
                      {item.answer}
                    </p>
                  </div>
                </Collapse>
              </li>
            </Disclosure>
          );
        })}
    </ul>
  );
};
