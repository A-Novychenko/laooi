import { AccordionItem } from './AccordionItem';

import { cn } from '@/utils/cn';

import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({ data, className }) => {
  return (
    <ul className={cn('flex flex-col gap-4', className)}>
      {data &&
        data.map((item: { title: string; text: string }, idx: number) => {
          return (
            <AccordionItem item={item} key={idx} defaultOpen={idx === 0} />
          );
        })}
    </ul>
  );
};
