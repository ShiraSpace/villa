import { JSX } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HERO_CONTENT, TEST_ID } from '../constants';
import { itemVariants } from '../animations';

export function HeroCTA(): JSX.Element {
  return (
    <motion.div data-testid={TEST_ID.HERO_CTA} variants={itemVariants}>
      <Button href='#contact'>{HERO_CONTENT.CTA_TEXT}</Button>
    </motion.div>
  );
}
