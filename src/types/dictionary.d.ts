interface IDictionary {
  meta: {
    title: string;
    description: string;
  };
  common: {
    logoAlt: string;
    searchInput: { placeholder: string };
    mainNav: {
      name: string;
      href: string;
    }[];
  };
}
