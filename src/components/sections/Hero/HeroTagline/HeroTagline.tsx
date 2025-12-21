import { JSX } from 'react';
import { motion } from 'framer-motion';
import { villaData } from '@/data/villa';
import { TEST_ID } from '../constants';
import { itemVariants } from '../animations';

export function HeroTagline(): JSX.Element {
  return (
    <motion.p
      data-testid={TEST_ID.HERO_TAGLINE}
      className='text-xl md:text-2xl lg:text-3xl text-gold-400 font-light mb-8'
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
      variants={itemVariants}
    >
      {villaData.tagline}
    </motion.p>
  );
}
