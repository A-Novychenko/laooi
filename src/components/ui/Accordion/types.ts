export type AccordionProps = {
  data: { title: string; text: string }[];
};

export type AccordionItemProps = {
  item: { title: string; text: string };
  defaultOpen: boolean;
};
