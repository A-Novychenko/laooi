'use client';

import { Fragment, useState } from 'react';

import { AnimatePresence, motion, easeOut } from 'framer-motion';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

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
              <motion.li
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  layout: { duration: 0.2, ease: easeOut },
                  opacity: { duration: 0.2 },
                }}
                className="max-w-[448px] origin-top rounded-3xl bg-bgLightSlate p-4 md:w-[688px] md:max-w-full md:px-6 md:py-4 xl:w-[846px] xl:py-6"
              >
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
                    className="transition-transform group-data-[open]:rotate-180"
                  />
                </DisclosureButton>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: easeOut }}
                        className="mt-2 origin-top overflow-hidden xl:mt-4"
                      >
                        <p className="text-sm font-normal text-textMenuAccent xl:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </motion.li>
            </Disclosure>
          );
        })}
    </ul>
  );
};
