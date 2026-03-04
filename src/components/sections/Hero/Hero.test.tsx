import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { TEST_ID } from './constants';

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('should render hero section', () => {
    expect(screen.getByTestId(TEST_ID.HERO_SECTION)).toBeInTheDocument();
  });

  it('should have hero id for navigation', () => {
    const section = screen.getByTestId(TEST_ID.HERO_SECTION);
    expect(section).toHaveAttribute('id', 'hero');
  });

  describe('subcomponents', () => {
    it('should render HeroTitle', () => {
      expect(screen.getByTestId(TEST_ID.HERO_TITLE)).toBeInTheDocument();
    });

    it('should render HeroTagline', () => {
      expect(screen.getByTestId(TEST_ID.HERO_TAGLINE)).toBeInTheDocument();
    });

    it.skip('should render HeroCTA', () => {
      expect(screen.getByTestId(TEST_ID.HERO_CTA)).toBeInTheDocument();
    });
  });
});
