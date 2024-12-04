import { format } from 'date-fns';

export const formatDate = (isoDate: string): string => {
  return format(new Date(isoDate), 'dd.MM.yyyy');
};
