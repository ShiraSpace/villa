import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';
import { TEST_ID } from '../constants';

jest.mock('../navigation-utils');

describe('Menu', () => {
  beforeEach(() => {
    render(<Menu />);
  });

  it('should render navigation element', () => {
    const nav = screen.getByTestId(TEST_ID.MENU);
    expect(nav).toHaveRole('navigation');
  });

  it('should render all menu items', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Amenities')).toBeInTheDocument();
    expect(screen.getByText('Accommodations')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should render 7 menu buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(7);
  });

  it('should have correct CSS classes for responsive layout', () => {
    const nav = screen.getByTestId(TEST_ID.MENU);
    expect(nav).toHaveClass('hidden', 'md:flex', 'items-center', 'space-x-8');
  });

  it('should render menu items in correct order', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Home');
    expect(buttons[1]).toHaveTextContent('Gallery');
    expect(buttons[2]).toHaveTextContent('Amenities');
    expect(buttons[3]).toHaveTextContent('Accommodations');
    expect(buttons[4]).toHaveTextContent('Location');
    expect(buttons[5]).toHaveTextContent('Testimonials');
    expect(buttons[6]).toHaveTextContent('Contact');
  });
});