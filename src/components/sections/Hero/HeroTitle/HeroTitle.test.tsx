import { render, screen } from '@testing-library/react';
import { HeroTitle } from './HeroTitle';
import { TEST_ID } from '../constants';
import { villaData } from '@/data/villa';

jest.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  },
}));

describe('HeroTitle', () => {
  beforeEach(() => {
    render(<HeroTitle />);
  });

  it('should render hero title', () => {
    expect(screen.getByTestId(TEST_ID.HERO_TITLE)).toBeInTheDocument();
  });

  it('should render villa name', () => {
    expect(screen.getByText(villaData.name)).toBeInTheDocument();
  });
});
