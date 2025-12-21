import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactButton } from './ContactButton';
import * as navigationUtils from '../navigation-utils';
import { HEADER_CONTENT, TEST_ID } from '../constants';

jest.mock('../navigation-utils');

describe('ContactButton', () => {
  const mockHandleLinkClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (navigationUtils.handleLinkClick as jest.Mock) = mockHandleLinkClick;

    render(<ContactButton isScrolled={true} />);
  });

  it('should render contact button text', () => {
    expect(screen.getByText(HEADER_CONTENT.CONTACT_BUTTON)).toBeInTheDocument();
  });

  it('should render as a button', () => {
    const button = screen.getByTestId(TEST_ID.CONTACT_BUTTON);
    expect(button).toHaveRole('button');
  });

  it('should call handleLinkClick with #contact when clicked', async () => {
    const user = userEvent.setup();

    const button = screen.getByTestId(TEST_ID.CONTACT_BUTTON);
    await user.click(button);

    expect(mockHandleLinkClick).toHaveBeenCalledWith('#contact');
  });

  it('should have compact button styling', () => {
    const button = screen.getByTestId(TEST_ID.CONTACT_BUTTON);
    expect(button).toHaveClass('bg-gold-500', 'px-6', 'py-2', 'text-sm');
  });

  it('should be hidden on mobile (md:block class)', () => {
    const button = screen.getByTestId(TEST_ID.CONTACT_BUTTON);
    expect(button).toHaveClass('hidden', 'md:block');
  });
});
