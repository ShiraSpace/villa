'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';
import { villaData } from '@/data/villa';
import { TEST_ID, CONTACT_CONTENT } from './constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Contact(): JSX.Element {
  const { contact } = villaData;

  return (
    <section id='contact' data-testid={TEST_ID.section} className='section-padding bg-stone-900'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p
            data-testid={TEST_ID.subtitle}
            className='mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold-400'
          >
            {CONTACT_CONTENT.subtitle}
          </p>
          <h2
            data-testid={TEST_ID.title}
            className='mb-4 font-serif text-3xl font-bold text-white md:text-4xl'
          >
            {CONTACT_CONTENT.title}
          </h2>
          <p className='text-stone-400 max-w-xl mx-auto'>{CONTACT_CONTENT.description}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6'
        >
          <motion.div
            data-testid={TEST_ID.booking}
            variants={itemVariants}
            className='flex flex-col items-center text-center p-8 rounded-xl border border-gold-400 bg-stone-800'
          >
            <ExternalLink className='w-8 h-8 text-gold-400 mb-4' />
            <h3 className='font-serif text-xl text-white mb-2'>
              {CONTACT_CONTENT.booking.headline}
            </h3>
            <p className='text-stone-400 text-sm mb-6'>{CONTACT_CONTENT.booking.subCopy}</p>
            <a
              href={contact.bookingUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-auto px-6 py-2.5 rounded-lg bg-gold-400 text-stone-900 font-sans font-semibold text-sm hover:bg-gold-500 transition-colors'
            >
              {CONTACT_CONTENT.booking.cta}
            </a>
          </motion.div>

          <motion.div
            data-testid={TEST_ID.whatsapp}
            variants={itemVariants}
            className='flex flex-col items-center text-center p-8 rounded-xl border border-stone-700 bg-stone-800'
          >
            <MessageCircle className='w-8 h-8 text-gold-400 mb-4' />
            <h3 className='font-serif text-xl text-white mb-2'>
              {CONTACT_CONTENT.whatsapp.headline}
            </h3>
            <p className='text-stone-400 text-sm mb-6'>{CONTACT_CONTENT.whatsapp.subCopy}</p>
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-auto px-6 py-2.5 rounded-lg border border-gold-400 text-gold-400 font-sans font-semibold text-sm hover:bg-gold-400 hover:text-stone-900 transition-colors'
            >
              {CONTACT_CONTENT.whatsapp.cta}
            </a>
          </motion.div>

          <motion.div
            data-testid={TEST_ID.email}
            variants={itemVariants}
            className='flex flex-col items-center text-center p-8 rounded-xl border border-stone-700 bg-stone-800'
          >
            <Mail className='w-8 h-8 text-gold-400 mb-4' />
            <h3 className='font-serif text-xl text-white mb-2'>{CONTACT_CONTENT.email.headline}</h3>
            <p className='text-stone-400 text-sm mb-6'>{CONTACT_CONTENT.email.subCopy}</p>
            <a
              href={`mailto:${contact.email}`}
              className='mt-auto px-6 py-2.5 rounded-lg border border-gold-400 text-gold-400 font-sans font-semibold text-sm hover:bg-gold-400 hover:text-stone-900 transition-colors'
            >
              {CONTACT_CONTENT.email.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
