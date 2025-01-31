export type ActivitiesSectionProps = {
  dict: IDictionary;
  lang: 'uk' | 'en';
  activities: ITransformedActivity[];
  isMainPage?: boolean;
};
