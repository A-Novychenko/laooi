interface IDictionary {
  meta: IMeta;
  common: {
    logoAlt: string;
    searchInput: { placeholder: string };
    postBackLink: IPostBackLink;
    readMoreLabel: string;
    mainNav: IMainNav[];
    accessibilityMenu: IAccessibilityMenu;
    footerNav: IFooterNav;
    socialListTitle: string;
    socialLinks: ISocialLinksItem[];
    footerBasement: IFooterBasement;
    footerLinkTitle: string;
    errorPage: IPlaceholder;
    devPage: IPlaceholder;
  };
  aboutSection: IAboutSection;
  activitiesSection: IActivitiesSection;
  heroSection: IHeroSection;
  FAQSection: IFAQSection;
  socialSection: ISocialSection;
  blogSection: IBlogSection;
  targetSection: ITargetSection;
  partnersSection: IPartnersSection;
  mediaSection: IMediaSection;
}

interface IPostBackLink {
  label: string;
  link: string;
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
  footerAbout: IFooterNavItem;
  footerActivities: IFooterNavItem;
  footerOther: IFooterNavItem;
}

interface IFooterNavEmbedded {
  name: string;
  href: string;
}

interface IFooterNavItem {
  title: string;
  embedded: IFooterNavEmbedded[];
}

interface ISocialLinksItem {
  name: string;
  label: string;
  settings: { href: string; externalLink: boolean };
}

interface IAboutSection {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  text: {
    first: string;
    second: string;
  };
  link: {
    label: string;
    href: string;
  };
}

interface IActivitiesSection {
  title: string;
  description: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
  items: IActivitiesSectionItems[];
}

interface IActivitiesSectionItems {
  quantity: string;
  text: string;
}

interface IHeroSection {
  title: string;
  descr: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
  img: {
    src: string;
    alt: string;
  };
}

interface IFAQSection {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
}

interface ISocialSection {
  title: string;
  descr: string;
  videoUrl: string;
  poster: string;
}

interface IFooterBasement {
  policy: string;
  developers: string;
  designer: string;
}

interface IBlogSection {
  title: string;
  errorData: {
    description: string;
    link: {
      label: string;
      settings: {
        href: string;
        externalLink: boolean;
      };
    };
  };
  link: { label: string; settings: { href: string; externalLink: boolean } };
}

interface ITargetSection {
  title: string;
  targetGroups: { text: string }[];
  photos: { img: { src: string; alt: string } }[];
}

interface IPartnersSection {
  title: string;
  partners: {
    img: string;
    name: string;
    link: string;
  }[];
}

interface IPlaceholder {
  title: string;
  description: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
}

interface IMediaSection {
  title: string;
  link: {
    label: string;
    settings: {
      href: string;
      externalLink: boolean;
    };
  };
  items: {
    img: { src: string; alt: string };
    cardLink: {
      href: string;
      labelCardLink: string;
    };
  }[];
}
