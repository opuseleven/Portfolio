import { WeatherApp } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('WeatherApp component', () => {
  it('Component renders', () => {
    render(<WeatherApp />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('WeatherApp');
    expect(headings[1]).toHaveTextContent('Search by city name.');
    expect(headings[2]).toHaveTextContent('Nashville');
  })
})
