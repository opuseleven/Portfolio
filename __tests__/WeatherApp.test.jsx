import { WeatherApp } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('WeatherApp component', () => {

  it('Component renders', () => {
    render(<WeatherApp />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('WeatherApp');
    expect(headings[1]).toHaveTextContent('Search by city name.');
    expect(headings[2]).toHaveTextContent('Nashville');
  })

  it('UI functions to control app', async () => {
    render(<WeatherApp />);
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'nashville'}});
    })
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
      await new Promise(r => setTimeout(r, 3000));
    })
    const headings = screen.getAllByRole('heading');
    expect(headings[2]).toHaveTextContent('Nashville');
  })
})
