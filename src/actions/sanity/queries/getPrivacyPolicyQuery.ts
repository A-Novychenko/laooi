export const getPrivacyPolicyQuery = () => {
  return `
  *[_type == "privacy-policy"] {
   body {
        uk,
        en
      }
  }
  `;
};
