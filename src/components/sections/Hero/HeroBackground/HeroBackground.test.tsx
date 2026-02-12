import { render, screen } from '@testing-library/react';
import { HeroBackground } from './HeroBackground';
import { TEST_ID } from '../constants';

describe('HeroBackground', () => {
  beforeEach(() => {
    render(<HeroBackground />);
  });

  it('should render hero video', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toBeInTheDocument();
  });

  it('should render overlay gradient', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_OVERLAY)).toBeInTheDocument();
  });
});
