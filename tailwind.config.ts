import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1360px',

      smOnly320: { max: '319.98px' },
      smOnly480: { max: '479.98px' },
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '40px',
        xl: '40px',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      lineHeight: {
        normal: '1.15',
      },
      colors: {
        textPrimary: '#051D35',
        textSecondary: '#000000',
        textAccent: '#003399',
        textSlate: '#666666',
        textLight: '#ffffff',
        textMenuAccent: '#062365',
        textFooterAccent: '#D4DAE9',
        textActive: '#C7C7D0',
        textFooterLink: '#FDE047',
        textFooterActive: '#EAC608',
        textBlue: '#039',
        textGreen: '#093',
        textRed: '#f00',

        bgLight: '#ffffff',
        bgSlate: '#EAEDF4',
        bgDarkSlate: '#D4DAE9',
        bgDark: '#051D35',
        bgLightSlate: '#F5F7FA',
        bgAccentLight: '#039',
        bgAccentDark: '#062365',
        bgAccentStrongDark: '#010C3B',
        bgIconEyeDark: '#424666',
        bgSocialIcon: '#23314D',
        bgSlideBtn: '#eaedf480',
      },
      boxShadow: {
        mobMenuHeader: '0px 0px 40px 0px rgba(0, 0, 0, 0.10)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
