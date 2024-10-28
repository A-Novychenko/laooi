'use client';

import { createContext, useContext, useState, useEffect } from 'react';

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
    textSize: 'text-medium',
    highContrast: false,
    highlightLinks: false,
    largeCursor: false,
  });

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
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const paragraphs = document.querySelectorAll('p');
    const links = document.querySelectorAll('a');

    paragraphs.forEach(p => {
      p.className = `${newSettings.textSize} transition-font-size`;
    });

    links.forEach(link => {
      link.className = `${newSettings.textSize} transition-font-size`;
      link.style.backgroundColor = newSettings.highlightLinks ? 'yellow' : '';
      link.style.textDecoration = newSettings.highlightLinks
        ? 'underline'
        : 'none';
    });

    document.body.classList.toggle('grayscale', newSettings.highContrast);
    document.documentElement.style.cursor = newSettings.largeCursor
      ? 'url("/images/largeCursor.png"), auto'
      : 'auto';

    document.querySelectorAll('a').forEach(link => {
      link.style.backgroundColor = newSettings.highlightLinks ? 'yellow' : '';
      link.style.textDecoration = newSettings.highlightLinks
        ? 'underline'
        : 'none';
    });
  };

  return (
    <AccessibilityContext.Provider value={{ settings, setSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
