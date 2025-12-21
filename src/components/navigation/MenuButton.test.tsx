import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuButton } from './MenuButton';
import * as navigationUtils from './navigation-utils';
import { MenuItem } from './types';
import { TEST_ID } from './constants';

jest.mock('./navigation-utils');

describe('MenuButton', () => {
  const mockHandleLinkClick = jest.fn();
  const mockMenuItem: MenuItem = {
    label: 'Gallery',
    href: '#gallery',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (navigationUtils.handleLinkClick as jest.Mock) = mockHandleLinkClick;

    render(<MenuButton menuItem={mockMenuItem} />);
  });

  it('should render menu item label', () => {
    expect(screen.getByText('Gallery')).toBeInTheDocument();
  });

  it('should render as a button', () => {
    const button = screen.getByTestId(TEST_ID.MENU_BUTTON);
    expect(button).toHaveRole('button');
  });

  it('should call handleLinkClick with correct href when clicked', async () => {
    const user = userEvent.setup();

    const button = screen.getByTestId(TEST_ID.MENU_BUTTON);
    await user.click(button);

    expect(mockHandleLinkClick).toHaveBeenCalledWith('#gallery');
  });

  it('should render underline span for hover effect', () => {
    const button = screen.getByTestId(TEST_ID.MENU_BUTTON);
    const span = button.querySelector('span');
    
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('absolute', 'bottom-0', 'bg-gold-500');
  });

  it('should have correct CSS classes', () => {
    const button = screen.getByTestId(TEST_ID.MENU_BUTTON);
    expect(button).toHaveClass('text-stone-700', 'hover:text-gold-600', 'transition-colors');
  });
});