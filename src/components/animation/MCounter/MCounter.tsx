'use client';

import { useEffect, useRef } from 'react';

import { useInView, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
};

export const MCounter = ({ value, direction = 'up', className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 70, // Зменшити для швидшого затухання
    stiffness: 300, // Збільшити для пришвидшення руху
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(
    () =>
      springValue.on('change', latest => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('uk-UA').format(
            Math.round(latest),
          );
        }
      }),
    [springValue],
  );

  return <span className={className} ref={ref} />;
};
