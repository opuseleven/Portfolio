import { screen, render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {

  it('Page renders', () => {
    render(<Home />);
    expect(screen.getAllByRole('heading')).toBeDefined();
  })
})
