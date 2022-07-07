import { getCity, getDay, getWeatherImage } from '../services/weatherservices';
import { City, Day } from '../types';

describe('All Weather services tests', () => {

  const testdata = require('../data/weathertestdata.json');
  const cityData = testdata['city'];

  it('getCity function returns a City object', () => {
    const testCity: City = getCity(cityData);
    expect(testCity.name).toBe('Nashville');
    expect(testCity.lat).toBe(36.165900000000001);
    expect(testCity.lon).toBe(-86.784400000000005);
  })

  const weatherData = testdata['list'];

  it('getDay function returns a Day object', () => {
    const day: Day = getDay(weatherData[0]);
    expect(day.weather).toBe(weatherData[0]['weather'][0]['main']);
    expect(day.temp).toBe(parseInt(String((weatherData[0]['main']['temp'] * 1.8 - 459.67)), 10));
    expect(day.humidity).toBe(weatherData[0]['main']['humidity']);
    expect(day.weatherDescription).toBe(weatherData[0]['weather'][0]['description']);
    expect(day.precipitation).toBe(Number(weatherData[0]['pop']) * 100);
    expect(day.weatherId).toBe(800);
    expect(day.weatherImage).toBe('/weather-images/sunny.png');
  })

  let image = "";

  it('getWeatherImage function returns sunny by default', () => {
    image = getWeatherImage('0');
    expect(image).toBe('sunny.png');
  })

  it('getWeatherImage returns cloudy3', () => {
    image = getWeatherImage('805');
    expect(image).toBe('cloudy3.png');
  })

  it('getWeatherImage returns cloudy2', () => {
    image = getWeatherImage('802');
    expect(image).toBe('cloudy2.png');
  })

  it('getWeatherImage returns cloudy', () => {
    image = getWeatherImage('801');
    expect(image).toBe('cloudy.png');
  })

  it('getWeatherImage returns sunny by id', () => {
    image = getWeatherImage('800');
    expect(image).toBe('sunny.png');
  })

  it('getWeatherImage returns stormy', () => {
    image = getWeatherImage('772');
    expect(image).toBe('stormy.png');
  })

  it('getWeatherImage returns windy', () => {
    image = getWeatherImage('700');
    expect(image).toBe('windy.png');
  })

  it('getWeatherImage returns winterymix', () => {
    image = getWeatherImage('615');
    expect(image).toBe('winterymix.png');
  })

  it('getWeatherImage returns wintery', () => {
    image = getWeatherImage('611');
    expect(image).toBe('wintery.png');
  })

  it('getWeatherImage returns snow', () => {
    image = getWeatherImage('600');
    expect(image).toBe('snow.png');
  })

  it('getWeatherImage returns rainy', () => {
    image = getWeatherImage('502');
    expect(image).toBe('rainy.png');
  })

  it('getWeatherImage returns rainy2', () => {
    image = getWeatherImage('501');
    expect(image).toBe('rainy2.png');
  })

  it('getWeatherImage returns rainy1', () => {
    image = getWeatherImage('500');
    expect(image).toBe('rainy1.png');
  })

  it('getWeatherImage returns drizzle', () => {
    image = getWeatherImage('300');
    expect(image).toBe('drizzle.png');
  })

  it('getWeatherImage returns stormy', () => {
    image = getWeatherImage('200');
    expect(image).toBe('stormy.png');
  })
})
