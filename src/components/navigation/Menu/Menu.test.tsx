import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';
import { TEST_ID } from '../constants';

jest.mock('../navigation-utils');

describe('Menu', () => {
  beforeEach(() => {
    render(<Menu isScrolled={false} />);
  });

  it('should render navigation element', () => {
    const nav = screen.getByTestId(TEST_ID.MENU);
    expect(nav).toHaveRole('navigation');
  });

  it('should render all menu items', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Amenities')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should render 5 menu buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  it('should have correct CSS classes for responsive layout', () => {
    const nav = screen.getByTestId(TEST_ID.MENU);
    expect(nav).toHaveClass('hidden', 'md:flex', 'items-center', 'space-x-12');
  });

  it('should render menu items in correct order', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Home');
    expect(buttons[1]).toHaveTextContent('Overview');
    expect(buttons[2]).toHaveTextContent('Gallery');
    expect(buttons[3]).toHaveTextContent('Amenities');
    expect(buttons[4]).toHaveTextContent('Contact');
  });
});
