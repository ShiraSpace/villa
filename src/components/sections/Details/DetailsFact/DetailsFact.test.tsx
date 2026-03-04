import { render, screen } from '@testing-library/react';
import { DetailsFact } from './DetailsFact';
import { TEST_ID } from '../constants';

const mockFact = {
  title: 'Test Title',
  description: 'Test description text',
};

describe('DetailsFact', () => {
  beforeEach(() => {
    render(<DetailsFact title={mockFact.title} description={mockFact.description} />);
  });

  it('renders the fact card', () => {
    const fact = screen.getByTestId(TEST_ID.DETAILS_FACT);
    expect(fact).toBeInTheDocument();
  });

  it('displays the title', () => {
    const title = screen.getByText(mockFact.title);
    expect(title).toBeInTheDocument();
  });

  it('displays the description', () => {
    const description = screen.getByText(mockFact.description);
    expect(description).toBeInTheDocument();
  });

  it('has hover transition styling', () => {
    const fact = screen.getByTestId(TEST_ID.DETAILS_FACT);
    expect(fact).toHaveClass('transition-colors');
  });
});
