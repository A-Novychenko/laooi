interface IDictionary {
  meta: IMeta;
  common: {
    logoAlt: string;
    searchInput: { placeholder: string };
    mainNav: {
      name: string;
      href: string;
    }[];
    accessibilityMenu: IAccessibilityMenu;
  };
}

interface IMeta {
  main: IMetaDataPage;
}

interface IMetaDataPage {
  title: string;
  description: string;
  keywords: string;
  images: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

interface IAccessibilityMenu {
  textSize: {
    increase: string;
    decrease: string;
  };
  grayscale: { on: string; off: string };
  highlightLink: { on: string; off: string };
  cursor: {
    increase: string;
    decrease: string;
  };
  reset: string;
}
