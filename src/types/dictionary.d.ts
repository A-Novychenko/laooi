interface IDictionary {
  meta: IMeta;
  common: {
    logoAlt: string;
    searchInput: { placeholder: string };
    mainNav: IMainNav[];
    accessibilityMenu: IAccessibilityMenu;
    footerNav: IFooterNav;
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

interface IMainNav {
  name: string;
  href: string;
  embedded?: IMainNavEmbedded[];
}

interface IMainNavEmbedded {
  name: string;
  href: string;
}

interface IFooterNav {
  footerAbout: IFooterAbout;
  footerActivities: IFooterActivities;
  footerOther: IFooterOther;
}

interface IFooterNavEmbedded {
  name: string;
  href: string;
}

interface IFooterAbout {
  title: string;
  embedded: IFooterNavEmbedded[];
}

interface IFooterActivities {
  title: string;
  embedded: IFooterNavEmbedded[];
}

interface IFooterOther {
  title: string;
  embedded: IFooterNavEmbedded[];
}
