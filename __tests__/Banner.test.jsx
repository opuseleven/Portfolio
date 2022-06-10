import { Banner } from '../components';
import { render, screen } from '@testing-library/react';

describe('Banner component', () => {

  it('Component renders', () => {
    render(<Banner />);
    expect(screen.getAllByRole('heading')).toBeDefined();
  })
})
