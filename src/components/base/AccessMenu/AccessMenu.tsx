'use client';

import { DropdownMenu } from '@/components/ui';

import { useAccessibility } from '@/context/AccessibilityProvider';
import { cn } from '@/utils/cn';

import {
  EyeIcon,
  PlusIcon,
  MinusIcon,
  LeftToggleIcon,
  LinkIcon,
  CursorIcon,
  TrashIcon,
} from './icons';

import { AccessMenuProps, AccessibilitySettings } from './types';

export const AccessMenu: React.FC<AccessMenuProps> = ({ dict }) => {
  const { settings, setSettings } = useAccessibility() as {
    settings: AccessibilitySettings;
    setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  };

  const handleTextSizeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSettings(prevSize => ({
      ...prevSize,
      textSize: prevSize.textSize === '16px' ? '24px' : '16px',
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
        settings.textSize === '16px' ? (
          <PlusIcon width={16} height={16} />
        ) : (
          <MinusIcon width={16} height={16} />
        ),
      text:
        settings.textSize === '16px'
          ? dict.textSize.increase
          : dict.textSize.decrease,
    },
    {
      action: toggleHighContrast,
      text: settings.highContrast ? dict.grayscale.off : dict.grayscale.on,
      icon: (
        <LeftToggleIcon
          width={16}
          height={16}
          className={cn({ 'rotate-180': settings.highContrast })}
        />
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
        className="flex size-11 items-center justify-center rounded-[40px] bg-bgSlate transition-colors hover:bg-bgDarkSlate focus:bg-bgDarkSlate data-[active]:bg-bgIconEyeDark data-[active]:text-textLight"
      >
        <EyeIcon width={16} height={16} />
      </button>
    </DropdownMenu>
  );
};
