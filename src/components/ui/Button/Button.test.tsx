import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { TEST_ID } from './constants';

describe('Button', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render(<Button href='#contact'>Click me</Button>);
    });

    it('should render button element', () => {
      expect(screen.getByTestId(TEST_ID.BUTTON)).toBeInTheDocument();
    });

    it('should render children text', () => {
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should render as anchor element', () => {
      const button = screen.getByTestId(TEST_ID.BUTTON);
      expect(button.tagName).toBe('A');
    });
  });

  describe('href behavior', () => {
    it('should have href attribute', () => {
      render(<Button href='#contact'>Link</Button>);
      const button = screen.getByTestId(TEST_ID.BUTTON);

      expect(button).toHaveAttribute('href', '#contact');
    });
  });

  describe('styling', () => {
    it('should apply primary button class', () => {
      render(<Button href='#contact'>Button</Button>);
      const button = screen.getByTestId(TEST_ID.BUTTON);

      expect(button).toHaveClass('btn-primary');
    });
  });
});
