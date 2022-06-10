import { Toolbar } from '../components';
import { render, screen } from '@testing-library/react';

describe('Toolbar component', () => {

  it('Component renders', () => {
    render(<Toolbar />);
    expect(screen.getAllByRole('button')).toBeDefined();
  })
})
