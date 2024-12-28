'use client';

import { RotatingLines } from 'react-loader-spinner';

import { LoaderProps } from './types';

export const Loader: React.FC<LoaderProps> = ({
  color = 'grey',
  size = 96,
  strokeWidth = 5,
  visible = true,
}) => {
  return (
    <RotatingLines
      animationDuration="0.75"
      strokeColor={color}
      strokeWidth={strokeWidth.toString()}
      visible={visible}
      width={size.toString()}
    />
  );
};
