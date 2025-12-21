import { render, screen } from '@testing-library/react';
import { HeroTagline } from './HeroTagline';
import { TEST_ID } from '../constants';
import { villaData } from '@/data/villa';

jest.mock('framer-motion', () => ({
  motion: {
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('HeroTagline', () => {
  beforeEach(() => {
    render(<HeroTagline />);
  });

  it('should render hero tagline', () => {
    expect(screen.getByTestId(TEST_ID.HERO_TAGLINE)).toBeInTheDocument();
  });

  it('should render villa tagline', () => {
    expect(screen.getByText(villaData.tagline)).toBeInTheDocument();
  });
});
