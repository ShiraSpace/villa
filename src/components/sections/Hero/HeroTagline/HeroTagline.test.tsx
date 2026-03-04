import { render, screen } from '@testing-library/react';
import { HeroTagline } from './HeroTagline';
import { TEST_ID } from '../constants';
import { villaData } from '@/data/villa';

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
