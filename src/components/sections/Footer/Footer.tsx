import { JSX } from 'react';
import { TEST_ID, FOOTER_CONTENT } from './constants';

export function Footer(): JSX.Element {
  return (
    <footer data-testid={TEST_ID.footer} className='bg-stone-100 border-t border-stone-200 py-10'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8'>
        <nav data-testid={TEST_ID.nav} className='flex flex-wrap justify-center gap-x-8 gap-y-2'>
          {FOOTER_CONTENT.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='font-sans text-sm text-stone-500 hover:text-stone-900 transition-colors'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div data-testid={TEST_ID.identity} className='text-center'>
          <p className='font-serif text-stone-800 text-lg mb-1'>{FOOTER_CONTENT.villaName}</p>
          <p className='font-sans text-stone-500 text-sm'>{FOOTER_CONTENT.tagline}</p>
          <p className='font-sans text-stone-500 text-sm'>{FOOTER_CONTENT.location}</p>
        </div>

        <p data-testid={TEST_ID.copyright} className='font-sans text-stone-400 text-xs'>
          {FOOTER_CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
}
