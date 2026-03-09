import { render, screen } from '@testing-library/react';
import { AmenityItem } from './AmenityItem';
import { TEST_ID } from '../constants';

jest.mock('framer-motion');

jest.mock('lucide-react', () => ({
  Waves: ({ 'data-testid': testId }: { 'data-testid'?: string }) => (
    <span data-testid={testId}>Waves</span>
  ),
  Sunrise: () => <span>Sunrise</span>,
  Trees: () => <span>Trees</span>,
  ChefHat: () => <span>ChefHat</span>,
  Wifi: () => <span>Wifi</span>,
  AirVent: () => <span>AirVent</span>,
  Droplets: () => <span>Droplets</span>,
  Tv: () => <span>Tv</span>,
  Laptop: () => <span>Laptop</span>,
  Bubbles: () => <span>Bubbles</span>,
  WashingMachine: () => <span>WashingMachine</span>,
  Fan: () => <span>Fan</span>,
  CarFront: () => <span>CarFront</span>,
  Shield: () => <span>Shield</span>,
  Bed: () => <span>Bed</span>,
  Sparkles: () => <span>Sparkles</span>,
  Lock: () => <span>Lock</span>,
  Coffee: () => <span>Coffee</span>,
}));

describe('AmenityItem', () => {
  it('should render the amenity item', () => {
    render(<AmenityItem name='Private Pool' icon='Waves' />);
    expect(screen.getByTestId(TEST_ID.AMENITY_ITEM)).toBeInTheDocument();
  });

  it('should render the amenity name', () => {
    render(<AmenityItem name='Private Pool' icon='Waves' />);
    expect(screen.getByTestId(TEST_ID.AMENITY_ITEM)).toHaveTextContent('Private Pool');
  });

  it('should render the icon when icon name is valid', () => {
    render(<AmenityItem name='Private Pool' icon='Waves' />);
    expect(screen.getByTestId(TEST_ID.AMENITY_ICON)).toBeInTheDocument();
  });

  it('should not render the icon when icon name is unknown', () => {
    render(<AmenityItem name='Private Pool' icon='UnknownIcon' />);
    expect(screen.queryByTestId(TEST_ID.AMENITY_ICON)).not.toBeInTheDocument();
  });
});
