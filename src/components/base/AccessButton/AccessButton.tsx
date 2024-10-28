'use client';

import { DropdownMenu } from '@/components/ui';

import { AccessButtonProps, AccessibilitySettings } from './types';

import { useAccessibility } from '@/context/AccessibilityProvider';

import {
  EyeIcon,
  PlusIcon,
  MinusIcon,
  LeftToggleIcon,
  RightToggleIcon,
  LinkIcon,
  CursorIcon,
  TrashIcon,
} from './icons';

export const AccessButton: React.FC<AccessButtonProps> = ({ dict }) => {
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
      icon:
        settings.textSize === 'text-medium' ? (
          <PlusIcon width={16} height={16} />
        ) : (
          <MinusIcon width={16} height={16} />
        ),
      text:
        settings.textSize === 'text-medium'
          ? dict.textSize.increase
          : dict.textSize.decrease,
    },
    {
      action: toggleHighContrast,
      text: settings.highContrast ? dict.grayscale.off : dict.grayscale.on,
      icon: settings.highContrast ? (
        <RightToggleIcon width={16} height={16} />
      ) : (
        <LeftToggleIcon width={16} height={16} />
      ),
    },
    {
      action: toggleHighlightLinks,
      icon: <LinkIcon width={16} height={16} />,
      text: settings.highlightLinks
        ? dict.highlightLink.off
        : dict.highlightLink.on,
    },
    {
      action: toggleLargeCursor,
      icon: <CursorIcon width={16} height={16} />,
      text: settings.largeCursor ? dict.cursor.decrease : dict.cursor.increase,
    },
    {
      action: () => {
        document.body.innerHTML =
          '<img src="/images/image.webp" alt="text" width="100%" height="100%">';
      },
      icon: <TrashIcon width={16} height={16} />,
      text: dict.reset,
    },
  ];

  return (
    <DropdownMenu dataForButtons={items} menuPosition="bottom">
      <button
        type="button"
        className="flex size-8 items-center justify-center rounded-[40px] bg-bgSlate data-[active]:bg-bgIconEyeDark data-[active]:text-textLight"
      >
        <EyeIcon width="16" height="16" />
      </button>
    </DropdownMenu>
  );
};
