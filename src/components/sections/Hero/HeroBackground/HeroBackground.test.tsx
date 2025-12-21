import { render, screen } from '@testing-library/react';
import { HeroBackground } from './HeroBackground';
import { HERO_CONTENT, TEST_ID } from '../constants';

describe('HeroBackground', () => {
  beforeEach(() => {
    render(<HeroBackground />);
  });

  it('should render hero image with correct alt text', () => {
    const image = screen.getByAltText(HERO_CONTENT.IMAGE_ALT);
    expect(image).toBeInTheDocument();
  });

  it('should render overlay gradient', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_OVERLAY)).toBeInTheDocument();
  });
});
