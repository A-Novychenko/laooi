export type DocumentsCategoryListProps = {
  categoryTitle: string;
  documents: ITransformedDocument[] | ITransformedResearchDocument[];
  fileLinks: IFileLinks;
  cardType?: string;
};
