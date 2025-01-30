export type AdvisorCardProps = {
  advisor: ITransformedAdvisor;
  lang: 'uk' | 'en';
  link: {
    path: string;
    label: string;
  };
};
