import { render, screen, fireEvent, act } from '@testing-library/react';
import { HeroBackground } from './HeroBackground';
import { TEST_ID, VIDEO_FADE_DELAY_MS } from '../constants';

describe('HeroBackground', () => {
  describe('with real timers', () => {
    beforeEach(() => {
      render(<HeroBackground />);
    });

    describe('fallback image', () => {
      it('should render the priority image', () => {
        expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_IMAGE)).toBeInTheDocument();
      });

      it('should use the exterior poster image as src', () => {
        expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_IMAGE)).toHaveAttribute(
          'src',
          expect.stringContaining('balcony-and-pool')
        );
      });
    });

    describe('video', () => {
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

      it('should have poster matching the fallback image', () => {
        expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveAttribute(
          'poster',
          expect.stringContaining('balcony-and-pool')
        );
      });

      it('should start hidden before either trigger fires', () => {
        expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveClass('opacity-0');
      });

      it('should fade in when onLoadedData fires before the timer', () => {
        fireEvent.loadedData(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO));
        expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveClass('opacity-100');
      });

      it('should render video source with correct src', () => {
        const source = screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO).querySelector('source');
        expect(source).toHaveAttribute('src', '/images/video/website_overview.mp4');
      });

      it('should render video source with correct type', () => {
        const source = screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO).querySelector('source');
        expect(source).toHaveAttribute('type', 'video/mp4');
      });
    });

    describe('overlay', () => {
      it('should render overlay gradient', () => {
        expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_OVERLAY)).toBeInTheDocument();
      });
    });
  });

  describe('timer fallback', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      render(<HeroBackground />);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should fade in after VIDEO_FADE_DELAY_MS even without loadedData', () => {
      expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveClass('opacity-0');
      act(() => {
        jest.advanceTimersByTime(VIDEO_FADE_DELAY_MS);
      });
      expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveClass('opacity-100');
    });

    it('should not fade in before the delay elapses', () => {
      act(() => {
        jest.advanceTimersByTime(VIDEO_FADE_DELAY_MS - 1);
      });
      expect(screen.getByTestId(TEST_ID.HERO_BACKGROUND_VIDEO)).toHaveClass('opacity-0');
    });
  });
});
