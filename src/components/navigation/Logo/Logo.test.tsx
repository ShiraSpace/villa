import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Logo } from './Logo';
import * as navigationUtils from '../navigation-utils';
import { HEADER_CONTENT, TEST_ID } from '../constants';

jest.mock('../navigation-utils');

describe('Logo', () => {
  const mockHandleLinkClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (navigationUtils.handleLinkClick as jest.Mock) = mockHandleLinkClick;
  });

  describe('when scrolled', () => {
    beforeEach(() => {
      render(<Logo isScrolled={true} />);
    });

    it('should render logo text', () => {
      expect(screen.getByText(HEADER_CONTENT.LOGO_TEXT)).toBeInTheDocument();
    });

    it('should render as a button', () => {
      const button = screen.getByTestId(TEST_ID.LOGO);
      expect(button).toHaveRole('button');
    });

    it('should call handleLinkClick with #hero when clicked', async () => {
      const user = userEvent.setup();
      const button = screen.getByTestId(TEST_ID.LOGO);
      await user.click(button);

      expect(mockHandleLinkClick).toHaveBeenCalledWith('#hero');
    });

    it('should have dark text', () => {
      const button = screen.getByTestId(TEST_ID.LOGO);
      expect(button).toHaveClass('text-stone-900');
    });
  });

  describe('when not scrolled', () => {
    beforeEach(() => {
      render(<Logo isScrolled={false} />);
    });

    it('should have white text', () => {
      const button = screen.getByTestId(TEST_ID.LOGO);
      expect(button).toHaveClass('text-white');
    });
  });
});
