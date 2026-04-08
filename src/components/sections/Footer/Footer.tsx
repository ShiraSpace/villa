import { JSX } from 'react';
import { TEST_ID, FOOTER_CONTENT, PAGE_CLASS_NAMES } from './constants';

export function Footer(): JSX.Element {
  return (
    <footer data-testid={TEST_ID.footer} className={PAGE_CLASS_NAMES.footer}>
      <div className={PAGE_CLASS_NAMES.container}>
        <nav data-testid={TEST_ID.nav} className={PAGE_CLASS_NAMES.nav}>
          {FOOTER_CONTENT.nav.map((item) => (
            <a key={item.href} href={item.href} className={PAGE_CLASS_NAMES.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div data-testid={TEST_ID.identity} className={PAGE_CLASS_NAMES.identity}>
          <p className={PAGE_CLASS_NAMES.villaName}>{FOOTER_CONTENT.villaName}</p>
          <p className={PAGE_CLASS_NAMES.tagline}>{FOOTER_CONTENT.tagline}</p>
          <p className={PAGE_CLASS_NAMES.tagline}>{FOOTER_CONTENT.location}</p>
        </div>

        <p data-testid={TEST_ID.copyright} className={PAGE_CLASS_NAMES.copyright}>
          {FOOTER_CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
}
