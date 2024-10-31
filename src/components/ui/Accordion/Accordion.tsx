import { AccordionItem } from './AccordionItem';

import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  return (
    <ul className="flex max-w-[288px] flex-col gap-4 md:max-w-[688px] xl:max-w-[848px]">
      {data &&
        data.map((item: { title: string; text: string }, idx: number) => {
          return (
            <AccordionItem item={item} key={idx} defaultOpen={idx === 0} />
          );
        })}
    </ul>
  );
};
