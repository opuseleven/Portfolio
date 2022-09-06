import { useState, useEffect } from 'react';
import { getDay } from '../../services/weatherservices';
import styles from '../../styles/Weather.module.css';
import { RenderImage } from '.';
import { ApiData, Day } from '../../types';

interface WeatherDisplayProps {
  data: ApiData
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {

  const [today, setToday] = useState<Day | undefined>();
  const [tomorrow, setTomorrow] = useState<Day | undefined>();
  const [dayAfter, setDayAfter] = useState<Day | undefined>();

  useEffect(() => {
    const weatherData = data['list'];
    const todayDay = getDay(weatherData[0]);
    const tomorrowDay = getDay(weatherData[1]);
    const dayAfterDay = getDay(weatherData[2]);
    setToday(todayDay);
    setTomorrow(tomorrowDay);
    setDayAfter(dayAfterDay);
  }, [data]);

  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h3>Today:</h3>
        <div>
          {
            today && (
              <RenderImage image={today.weatherImage} alt={today.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            today && (
              <div>
                <h3>{today.weather}</h3>
                <p>{today.weatherDescription}</p>
                <p>Temperature: {today.temp}°F</p>
                <p>Humidity: {today.humidity}%</p>
                <p>Precipitation: {Number(today.precipitation).toPrecision(2)}%</p>
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.card}>
        <h3>Tomorrow:</h3>
        <div>
          {
            tomorrow && (
              <RenderImage image={tomorrow.weatherImage} alt={tomorrow.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            tomorrow && (
              <div>
                <h3>{tomorrow.weather}</h3>
                <p>Temperature: {tomorrow.temp}°F</p>
                <p>Humidity: {tomorrow.humidity}%</p>
                <p>Precipitation: {tomorrow.precipitation}%</p>
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.card}>
        <h3>Day After:</h3>
        <div>
          {
            dayAfter && (
              <RenderImage image={dayAfter.weatherImage} alt={dayAfter.weatherDescription} />
            )
          }
        </div>
        <hr />
        <div>
          {
            dayAfter && (
              <div>
                <h3>{dayAfter.weather}</h3>
                <p>Temperature: {dayAfter.temp}°F</p>
                <p>Humidity: {dayAfter.humidity}%</p>
                <p>Precipitation: {dayAfter.precipitation}%</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export { WeatherDisplay };
