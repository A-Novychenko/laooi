export type AccordionProps = {
  data: { title: string; text: string }[];
  className?: string;
};

export type AccordionItemProps = {
  item: { title: string; text: string };
  defaultOpen: boolean;
};
