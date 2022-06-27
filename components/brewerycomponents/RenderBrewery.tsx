import styles from '../../styles/Brewery.module.css';
import { useState, useEffect } from 'react';
import { Brewery } from '../../types';

interface RenderBreweryProps {
  brewery: Brewery,
  selectedBrewery: Brewery | undefined,
  setSelectedBrewery: React.Dispatch<React.SetStateAction<Brewery | undefined>>
}

const RenderBrewery: React.FC<RenderBreweryProps> = ({ brewery, selectedBrewery, setSelectedBrewery }) => {

  const key = brewery.obdb_id;
  const name = brewery.name;
  const type = brewery.brewery_type;
  const street = brewery.street;
  const city = brewery.city;
  const state = brewery.state;
  const url = brewery.website_url;

  const selectedTheme = styles.renderselectedbrewerycontainer;
  const unselectedTheme = styles.renderbrewerycontainer;

  const [currentTheme, setCurrentTheme] = useState(unselectedTheme);

  useEffect(() => {
    if (selectedBrewery) {
      if (brewery.name === selectedBrewery.name) {
        setCurrentTheme(selectedTheme);
      } else {
        setCurrentTheme(unselectedTheme);
      }
    }
  }, [selectedBrewery])

  function handleClick() {
    setSelectedBrewery(brewery);
  }

  return (
    <div>
    {
      brewery && (
        <div className={currentTheme} key={key}>
          <div className={styles.renderbrewerycontents} onClick={() => handleClick()}>
            <h3>{name}</h3>
            <div className={styles.brewerydetails}>
              <p className={styles.detailtype}>Brewery Type: {type}</p>
              <p>{street}</p>
              <p>{city}, {state}</p>
              <p>
                <a href={url} target="_blank" rel="noreferrer">{url}</a>
              </p>
            </div>
          </div>
        </div>
      )
    }
    </div>
  )
}
export { RenderBrewery };
