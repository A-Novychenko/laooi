import React, { ReactNode } from 'react';

export type AccessibilitySettings = {
  textSize: string;
  highContrast: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
};

export type AccessibilityContextType = {
  settings: AccessibilitySettings;
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetSettings: () => void;
};

export type AccessibilityProviderProps = {
  children: ReactNode;
};
