import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { TEST_ID, FOOTER_CONTENT } from './constants';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer', () => {
    expect(screen.getByTestId(TEST_ID.footer)).toBeInTheDocument();
  });

  it('renders the nav', () => {
    expect(screen.getByTestId(TEST_ID.nav)).toBeInTheDocument();
  });

  it('renders all nav links', () => {
    FOOTER_CONTENT.nav.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('nav links have correct hrefs', () => {
    FOOTER_CONTENT.nav.forEach((item) => {
      expect(screen.getByText(item.label)).toHaveAttribute('href', item.href);
    });
  });

  it('renders the identity section', () => {
    expect(screen.getByTestId(TEST_ID.identity)).toBeInTheDocument();
  });

  it('renders the villa name', () => {
    expect(screen.getByText(FOOTER_CONTENT.villaName)).toBeInTheDocument();
  });

  it('renders the copyright', () => {
    expect(screen.getByTestId(TEST_ID.copyright)).toHaveTextContent(FOOTER_CONTENT.copyright);
  });
});
