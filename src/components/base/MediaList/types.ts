export type MediaListProps = {
  items: {
    img: { src: string; alt: string };
    cardLink: {
      href: string;
      labelCardLink: string;
    };
  }[];
};
