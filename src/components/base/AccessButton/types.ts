export type AccessibilitySettings = {
  textSize: 'text-medium' | 'text-large';
  highContrast: boolean;
  highlightLinks: boolean;
  largeCursor: boolean;
};

export type AccessButtonProps = { dict: IAccessibilityMenu };
