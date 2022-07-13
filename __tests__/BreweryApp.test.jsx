import { BreweryApp } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('BreweryApp component', () => {

  it('Component renders', () => {
    render(<BreweryApp />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Submit');
    expect(buttons[1]).toHaveTextContent('Filter');
    expect(buttons[2]).toHaveTextContent('☾');
    expect(buttons[3]).toHaveTextContent('Show Map');
  })

  it('UI functions to run app', async () => {
    render(<BreweryApp />);
    const buttons = screen.getAllByRole('button');
    const textbox = screen.getByRole('textbox');
    await act(async () => {
      fireEvent.change(textbox, {target: {value: 'nashville'}});
      fireEvent.click(buttons[0]);
      await new Promise(r => setTimeout(r, 3000));
      fireEvent.click(buttons[3]);
      await new Promise(r => setTimeout(r, 1000));
    })
    expect(screen.getByRole('map')).toBeDefined();
  })
})
