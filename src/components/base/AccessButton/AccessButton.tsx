'use client';

import { useAccessibility } from '@/context/AccessibilityProvider';

import { DropdownMenu } from '../../ui/DropdownMenu';

import EyeIcon from '~/icons/eye.svg';

type AccessibilitySettings = {
  textSize: 'text-medium' | 'text-large';
  highContrast: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
};

export const AccessButton: React.FC = () => {
  const { settings, setSettings } = useAccessibility() as {
    settings: AccessibilitySettings;
    setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  };

  const handleTextSizeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSettings(prevSize => ({
      ...prevSize,
      textSize:
        prevSize.textSize === 'text-medium' ? 'text-large' : 'text-medium',
    }));
  };

  const toggleHighContrast = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleHighlightLinks = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSettings(prev => ({ ...prev, highlightLinks: !prev.highlightLinks }));
  };

  const toggleLargeCursor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSettings(prev => ({ ...prev, largeCursor: !prev.largeCursor }));
  };

  const items = [
    {
      action: handleTextSizeChange,
      className: 'mb-2 block rounded bg-blue-500 p-2 text-white',

      text:
        settings.textSize === 'text-medium'
          ? 'Збільшити текст'
          : 'Зменшити текст',
    },
    {
      action: toggleHighContrast,
      className: `mb-2 block rounded p-2 ${settings.highlightLinks ? 'bg-yellow-500' : 'bg-gray-500'} text-white`,
      text: settings.highContrast ? 'Вимкнути контраст' : 'Увімкнути контраст',
    },
    {
      action: toggleHighlightLinks,
      className: `mb-2 block rounded p-2 ${settings.highlightLinks ? 'bg-yellow-500' : 'bg-gray-500'} text-white`,

      text: settings.highlightLinks
        ? 'Вимкнути підсвічування'
        : 'Підсвітити посилання',
    },
    {
      action: toggleLargeCursor,
      className: `mb-2 block rounded p-2 ${settings.largeCursor ? 'bg-yellow-500' : 'bg-gray-500'} text-white`,

      text: settings.largeCursor ? 'Зменшити курсор' : 'Збільшити курсор',
    },
  ];

  return (
    <DropdownMenu dataForButtons={items}>
      <EyeIcon width="16" height="16" />
    </DropdownMenu>
  );
};
