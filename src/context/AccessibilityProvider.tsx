'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  AccessibilityProviderProps,
  AccessibilitySettings,
  AccessibilityContextType,
} from './types';

const AccessibilityContext = createContext<AccessibilityContextType | null>(
  null,
);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider',
    );
  }
  return context;
};

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState({
    textSize: '16px',
    highContrast: false,
    highlightLinks: false,
    largeCursor: false,
  });

  const memoizedApplySettings = useCallback(
    (newSettings: AccessibilitySettings) => {
      document.documentElement.style.fontSize = settings.textSize;

      document.documentElement.classList.toggle(
        'grayscale',
        newSettings.highContrast,
      );
      document.body.classList.toggle(
        'underline-links',
        newSettings.highlightLinks,
      );
      document.documentElement.style.cursor = newSettings.largeCursor
        ? 'url("/images/largeCursor.png"), auto'
        : 'auto';
    },

    [settings.textSize],
  );

  useEffect(() => {
    const savedSettings = JSON.parse(
      localStorage.getItem('accessibilitySettings') || '{}',
    );
    if (savedSettings) {
      setSettings(savedSettings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    memoizedApplySettings(settings);
  }, [memoizedApplySettings, settings]);

  const resetSettings = () => {
    const defaultSettings = {
      textSize: '16px',
      highContrast: false,
      highlightLinks: false,
      largeCursor: false,
    };

    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{ settings, setSettings, resetSettings }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
