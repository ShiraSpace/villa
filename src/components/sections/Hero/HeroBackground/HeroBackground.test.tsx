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

  it('should have autoPlay attribute', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveAttribute('autoplay');
  });

  it('should have muted property', () => {
    expect((screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO) as HTMLVideoElement).muted).toBe(
      true
    );
  });

  it('should have loop attribute', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveAttribute('loop');
  });

  it('should have playsInline attribute', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveAttribute('playsinline');
  });

  it('should render video source with correct src', () => {
    const source = screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO).querySelector('source');
    expect(source).toHaveAttribute('src', '/images/video/part_3.mov');
  });

  it('should render video source with correct type', () => {
    const source = screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO).querySelector('source');
    expect(source).toHaveAttribute('type', 'video/mp4');
  });

  it('should render overlay gradient', () => {
    expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_OVERLAY)).toBeInTheDocument();
  });
});
