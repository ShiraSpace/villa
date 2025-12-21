import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import * as useScrollPositionModule from '@/hooks/useScrollPosition';
import { TEST_ID } from '../constants';

jest.mock('@/hooks/useScrollPosition');

describe('Header', () => {
  const mockUseScrollPosition = jest.spyOn(useScrollPositionModule, 'useScrollPosition');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render header element', () => {
    mockUseScrollPosition.mockReturnValue(0);
    render(<Header />);

    const header = screen.getByTestId(TEST_ID.HEADER);
    expect(header).toHaveRole('banner');
  });

  it('should render all child components', () => {
    mockUseScrollPosition.mockReturnValue(0);
    render(<Header />);

    expect(screen.getByTestId(TEST_ID.CONTACT_BUTTON)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.LOGO)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.MENU)).toBeInTheDocument();
  });

  it('should have transparent background when not scrolled', () => {
    mockUseScrollPosition.mockReturnValue(0);
    render(<Header />);

    const header = screen.getByTestId(TEST_ID.HEADER);

    expect(header).toHaveClass('bg-transparent');
    expect(header).not.toHaveClass('bg-white', 'shadow-md');
  });

  it('should have white background with shadow when scrolled past 50px', () => {
    mockUseScrollPosition.mockReturnValue(51);
    render(<Header />);

    const header = screen.getByTestId(TEST_ID.HEADER);

    expect(header).toHaveClass('bg-white', 'shadow-md', 'backdrop-blur-sm');
    expect(header).not.toHaveClass('bg-transparent');
  });

  it('should have transparent background when scrolled exactly 50px', () => {
    mockUseScrollPosition.mockReturnValue(50);
    render(<Header />);

    const header = screen.getByTestId(TEST_ID.HEADER);

    expect(header).toHaveClass('bg-transparent');
    expect(header).not.toHaveClass('bg-white');
  });

  it('should have fixed positioning classes', () => {
    mockUseScrollPosition.mockReturnValue(0);
    render(<Header />);

    const header = screen.getByTestId(TEST_ID.HEADER);
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
  });
});