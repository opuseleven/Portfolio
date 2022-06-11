import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Home page', () => {

  it('Page renders', () => {
    render(<Home />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Cody Clark');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Development Portfolio');
  })
})
