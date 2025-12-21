import { JSX } from 'react';
import { motion } from 'framer-motion';
import { villaData } from '@/data/villa';
import { TEST_ID } from '../constants';
import { itemVariants } from '../animations';

export function HeroTitle(): JSX.Element {
  return (
    <motion.h1
      data-testid={TEST_ID.HERO_TITLE}
      className='font-serif text-4xl md:text-6xl lg:text-hero font-bold mb-4'
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
      variants={itemVariants}
    >
      {villaData.name}
    </motion.h1>
  );
}
