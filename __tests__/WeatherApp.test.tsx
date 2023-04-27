import { WeatherApp } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('WeatherApp component', () => {

  it('Component renders', () => {
    render(<WeatherApp />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('WeatherApp');
    expect(headings[1]).toHaveTextContent('Search by city name.');
    expect(headings[2]).toHaveTextContent('Or search by zip code');
    expect(headings[3]).toHaveTextContent('Nashville');
  })

  it('UI functions to control app', async () => {
    render(<WeatherApp />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 1000));
    })
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'walla walla'}});
    })
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    await act(async () => {
      await new Promise(r => setTimeout(r, 2000));
    })
    const headings = screen.getAllByRole('heading');
    expect(headings[3]).toHaveTextContent('Walla Walla');
  })
})
