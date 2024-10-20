'use client';
import React from 'react';
import { useAccessibility } from '@/context/AccessibilityProvider';

type AccessibilitySettings = {
  textSize: 'text-medium' | 'text-large';
  highContrast: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
};

const AccessibilityMenu = () => {
  const { settings, setSettings } = useAccessibility() as {
    settings: AccessibilitySettings;
    setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  };

  const handleTextSizeChange = () => {
    setSettings(prevSize => ({
      ...prevSize,
      textSize:
        prevSize.textSize === 'text-medium' ? 'text-large' : 'text-medium',
    }));
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleHighlightLinks = () => {
    setSettings(prev => ({ ...prev, highlightLinks: !prev.highlightLinks }));
  };

  const toggleLargeCursor = () => {
    setSettings(prev => ({ ...prev, largeCursor: !prev.largeCursor }));
  };

  return (
    <div className="fixed right-0 top-0 bg-gray-100 p-4 shadow-lg">
      <h2 className="mb-4 text-lg font-bold">Налаштування доступності</h2>

      <button
        onClick={handleTextSizeChange}
        className="mb-2 block rounded bg-blue-500 p-2 text-white"
      >
        {settings.textSize === 'text-medium'
          ? 'Збільшити текст'
          : 'Зменшити текст'}
      </button>

      <button
        onClick={toggleHighContrast}
        className={`mb-2 block rounded p-2 ${settings.highContrast ? 'bg-yellow-500' : 'bg-gray-500'} text-white`}
      >
        {settings.highContrast ? 'Вимкнути контраст' : 'Увімкнути контраст'}
      </button>

      <button
        onClick={toggleHighlightLinks}
        className={`mb-2 block rounded p-2 ${settings.highlightLinks ? 'bg-yellow-500' : 'bg-gray-500'} text-white`}
      >
        {settings.highlightLinks
          ? 'Вимкнути підсвічування'
          : 'Підсвітити посилання'}
      </button>

      <button
        onClick={toggleLargeCursor}
        className={`mb-2 block rounded p-2 ${settings.largeCursor ? 'bg-yellow-500' : 'bg-gray-500'} text-white`}
      >
        {settings.largeCursor ? 'Зменшити курсор' : 'Збільшити курсор'}
      </button>
    </div>
  );
};

export default AccessibilityMenu;
