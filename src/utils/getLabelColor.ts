export const getLabelColor = (type: string) => {
  switch (type) {
    case 'News':
      return 'colorBlue';
    case 'Articles':
      return 'colorRed';
    case 'Events':
      return 'colorGreen';
    case 'Новини':
      return 'colorBlue';
    case 'Статті':
      return 'colorRed';
    case 'Події':
      return 'colorGreen';
    default:
      return 'colorDefault';
  }
};
