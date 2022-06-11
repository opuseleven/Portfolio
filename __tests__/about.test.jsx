import AboutMe from '../pages/about';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AboutMe page', () => {

  it('Page renders', () => {
    render(<AboutMe />);
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('About Me');
  })
})
