import Projects from '../pages/projects';
import { render, screen } from '@testing-library/react';

describe('Projects page', () => {

  it('Page renders', () => {
    render(<Projects />);
    expect(screen.getAllByRole('heading')).toBeDefined();
  })
})
