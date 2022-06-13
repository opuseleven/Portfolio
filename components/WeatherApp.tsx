import styles from '../styles/Weather.module.css';
import { Info, WeatherFooter, WeatherDisplay, CityDisplay } from './weathercomponents';
import { useField } from '../hooks';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ApiData } from '../types';

const WeatherApp: React.FC = () => {

  const [citySearch, setCitySearch] = useState<string>("Nashville");
  const tempData: ApiData = require('../data/weathertestdata.json');
  const [data, setData] = useState<ApiData>(tempData);
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchInput = useField('text');

  function refreshData() {
    const newUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch + '&cnt=3&appid=' + apiKey;
    axios
      .request({url: newUrl}).then((response) => setData(response.data));
  }

  function handleClick(e: any) {
    e.preventDefault();
    setCitySearch(searchInput.value);
    refreshData();
  }

  useEffect(() => {
    refreshData()
  }, []);

  return (
    <div>
      <div>
        <div className={styles.title}>
          <h1>WeatherApp</h1>
        </div>
        <div>
          <Info />
        </div>

        <div>
          <form onSubmit={handleClick}>
            <input {...searchInput} />
            <button>Search</button>
          </form>
        </div>

        <div>
          {data && (
            <CityDisplay  data={data} />
          )}
        </div>

        <div>
          {data && (
            <WeatherDisplay data={data} />
            )
          }
        </div>
      </div>
      <WeatherFooter />
    </div>
  )
}
export { WeatherApp };
