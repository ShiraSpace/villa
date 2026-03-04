import { render, screen } from '@testing-library/react';
import { DetailsGrid } from './DetailsGrid';
import { DETAILS_CONTENT, TEST_ID } from '../constants';

describe('DetailsGrid', () => {
  beforeEach(() => {
    render(<DetailsGrid />);
  });

  it('renders the grid container', () => {
    const grid = screen.getByTestId(TEST_ID.DETAILS_GRID);
    expect(grid).toBeInTheDocument();
  });

  it('renders all facts from content', () => {
    const facts = screen.getAllByTestId(TEST_ID.DETAILS_FACT);
    expect(facts).toHaveLength(DETAILS_CONTENT.FACTS.length);
  });

  it('displays each fact title', () => {
    DETAILS_CONTENT.FACTS.forEach((fact) => {
      expect(screen.getByText(fact.title)).toBeInTheDocument();
    });
  });

  it('displays each fact description', () => {
    DETAILS_CONTENT.FACTS.forEach((fact) => {
      expect(screen.getByText(fact.description)).toBeInTheDocument();
    });
  });

  it('has grid styling', () => {
    const grid = screen.getByTestId(TEST_ID.DETAILS_GRID);
    expect(grid).toHaveClass('grid');
  });
});
