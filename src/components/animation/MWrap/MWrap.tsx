'use client';

import { ReactNode } from 'react';

import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export const MWrap: React.FC<Props> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -500, y: 300 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div initial="hidden" variants={variants} whileInView={'visible'}>
      {children}
    </motion.div>
  );
};
