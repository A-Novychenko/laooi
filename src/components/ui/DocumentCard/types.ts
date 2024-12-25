export type DocumentCardProps = {
  doc: {
    title: string;
    fileUrl: string;
  };
  fileLinks: IFileLinks;
  cardType?: string;
};
