import Projects from '../pages/projects';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Projects page', () => {

  it('Page renders', () => {
    render(<Projects />);
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('Projects');
  })
})
