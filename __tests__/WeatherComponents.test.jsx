import { CityDisplay, Info, RenderImage, WeatherDisplay, WeatherFooter } from '../components/weathercomponents';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('All WeatherApp component tests', () => {

  const testdata = require('../data/weathertestdata.json');

  it('CityDisplay component renders and passes data correctly', () => {
    render(<CityDisplay data={testdata} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Nashville');
  })

  it('Info component renders', () => {
    render(<Info />);
    expect(screen.getByRole('heading')).toHaveTextContent('Search by city name.');
  })

  it('RenderImage component renders', async () => {
    render(<RenderImage image={'/../public/weather-images/cloudy.png'} />);
    await(screen.getByRole('img'));
    expect(screen.getByRole('img')).toBeDefined();
  })

  it('WeatherDisplay component renders and passes data', () => {
    render(<WeatherDisplay data={testdata} />);
    const headings = screen.getAllByRole('heading');
    expect(headings[1]).toHaveTextContent('Clear');
    expect(headings[3]).toHaveTextContent('Clear');
    expect(headings[5]).toHaveTextContent('Clear');
  })

  it('WeatherFooter component renders', () => {
    render(<WeatherFooter />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0]).toHaveTextContent('Data provided by:');
    expect(headings[1]).toHaveTextContent('openweathermap.org');
  })
})
