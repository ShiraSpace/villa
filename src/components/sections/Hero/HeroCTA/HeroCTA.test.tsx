import { render, screen } from '@testing-library/react';
import { HeroCTA } from './HeroCTA';
import { HERO_CONTENT, TEST_ID } from '../constants';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('HeroCTA', () => {
  beforeEach(() => {
    render(<HeroCTA />);
  });

  it('should render CTA container', () => {
    expect(screen.getByTestId(TEST_ID.HERO_CTA)).toBeInTheDocument();
  });

  it('should render contact button', () => {
    expect(screen.getByText(HERO_CONTENT.CTA_TEXT)).toBeInTheDocument();
  });
});
