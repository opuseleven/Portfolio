import AboutMe from '../pages/about';
import { render, screen } from '@testing-library/react';

describe('AboutMe page', () => {

  it('Page renders', () => {
    render(<AboutMe />);
    expect(screen.getAllByRole('heading')).toBeDefined();
  })
})
