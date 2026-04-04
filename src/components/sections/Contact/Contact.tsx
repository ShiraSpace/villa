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
    <section id='contact' data-testid={TEST_ID.section} className='section-padding bg-white'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <p
            data-testid={TEST_ID.subtitle}
            className='mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold-600'
          >
            {CONTACT_CONTENT.subtitle}
          </p>
          <h2
            data-testid={TEST_ID.title}
            className='mb-4 font-serif text-3xl font-bold text-stone-900 md:text-4xl'
          >
            {CONTACT_CONTENT.title}
          </h2>
          <p className='text-stone-500 max-w-xl mx-auto'>{CONTACT_CONTENT.description}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='flex flex-col gap-6'
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <motion.div
              data-testid={TEST_ID.airbnb}
              variants={itemVariants}
              className='flex flex-col items-center text-center p-7 rounded-xl border border-stone-200 bg-stone-50'
            >
              <ExternalLink className='w-7 h-7 text-gold-500 mb-3' />
              <h3 className='font-serif text-lg font-semibold text-stone-900 mb-1'>
                {CONTACT_CONTENT.airbnb.headline}
              </h3>
              <p className='text-stone-500 text-sm mb-5'>{CONTACT_CONTENT.airbnb.subCopy}</p>
              <a
                href={contact.airbnbUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto px-5 py-2 rounded-lg bg-gold-500 text-white font-sans font-semibold text-sm hover:bg-gold-600 transition-colors'
              >
                {CONTACT_CONTENT.airbnb.cta}
              </a>
            </motion.div>

            <motion.div
              data-testid={TEST_ID.bookingCom}
              variants={itemVariants}
              className='flex flex-col items-center text-center p-7 rounded-xl border border-stone-200 bg-stone-50'
            >
              <ExternalLink className='w-7 h-7 text-gold-500 mb-3' />
              <h3 className='font-serif text-lg font-semibold text-stone-900 mb-1'>
                {CONTACT_CONTENT.bookingCom.headline}
              </h3>
              <p className='text-stone-500 text-sm mb-5'>{CONTACT_CONTENT.bookingCom.subCopy}</p>
              <a
                href={contact.bookingComUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto px-5 py-2 rounded-lg bg-gold-500 text-white font-sans font-semibold text-sm hover:bg-gold-600 transition-colors'
              >
                {CONTACT_CONTENT.bookingCom.cta}
              </a>
            </motion.div>

            <motion.div
              data-testid={TEST_ID.seanrent}
              variants={itemVariants}
              className='flex flex-col items-center text-center p-7 rounded-xl border border-stone-200 bg-stone-50'
            >
              <ExternalLink className='w-7 h-7 text-gold-500 mb-3' />
              <h3 className='font-serif text-lg font-semibold text-stone-900 mb-1'>
                {CONTACT_CONTENT.seanrent.headline}
              </h3>
              <p className='text-stone-500 text-sm mb-5'>{CONTACT_CONTENT.seanrent.subCopy}</p>
              <a
                href={contact.seanrentUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto px-5 py-2 rounded-lg bg-gold-500 text-white font-sans font-semibold text-sm hover:bg-gold-600 transition-colors'
              >
                {CONTACT_CONTENT.seanrent.cta}
              </a>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <motion.div
              data-testid={TEST_ID.whatsapp}
              variants={itemVariants}
              className='flex flex-col items-center text-center p-7 rounded-xl border border-stone-200 bg-stone-50'
            >
              <MessageCircle className='w-7 h-7 text-gold-500 mb-3' />
              <h3 className='font-serif text-lg font-semibold text-stone-900 mb-1'>
                {CONTACT_CONTENT.whatsapp.headline}
              </h3>
              <p className='text-stone-500 text-sm mb-5'>{CONTACT_CONTENT.whatsapp.subCopy}</p>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT_CONTENT.whatsapp.prefilledMessage)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto px-5 py-2 rounded-lg border border-stone-300 text-stone-700 font-sans font-semibold text-sm hover:border-gold-500 hover:text-gold-600 transition-colors'
              >
                {CONTACT_CONTENT.whatsapp.cta}
              </a>
            </motion.div>

            <motion.div
              data-testid={TEST_ID.email}
              variants={itemVariants}
              className='flex flex-col items-center text-center p-7 rounded-xl border border-stone-200 bg-stone-50'
            >
              <Mail className='w-7 h-7 text-gold-500 mb-3' />
              <h3 className='font-serif text-lg font-semibold text-stone-900 mb-1'>
                {CONTACT_CONTENT.email.headline}
              </h3>
              <p className='text-stone-500 text-sm mb-5'>{CONTACT_CONTENT.email.subCopy}</p>
              <a
                href={`mailto:${contact.email}`}
                className='mt-auto px-5 py-2 rounded-lg border border-stone-300 text-stone-700 font-sans font-semibold text-sm hover:border-gold-500 hover:text-gold-600 transition-colors'
              >
                {CONTACT_CONTENT.email.cta}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
