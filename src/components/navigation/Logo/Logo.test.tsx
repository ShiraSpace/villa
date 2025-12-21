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

    render(<Logo />);
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

  it('should have correct CSS classes', () => {
    const button = screen.getByTestId(TEST_ID.LOGO);
    expect(button).toHaveClass('text-2xl', 'font-serif', 'font-bold', 'text-stone-900');
  });
});
