import styles from '../styles/Brewery.module.css';
import { Brewery, TypeFilterState } from '../types';
import { useState, useEffect } from 'react';
import { SearchForm, RenderBrewery, Filters, ListMapSwitch, MapContainer } from './brewerycomponents';
import { filterByType, typeFilterCheck, filterByHasCoordinates } from '../services/breweryservices';

const BreweryApp: React.FC = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [displayedBreweries, setDisplayedBreweries] = useState<Brewery[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedBrewery, setSelectedBrewery] = useState<Brewery>();

  const defaultTypeFilter: TypeFilterState = {
    micro: false,
    brewpub: false,
    contract: false,
    large: false,
    regional: false
  }

  const [typeFilterState, setTypeFilterState] = useState<TypeFilterState>(defaultTypeFilter);
  const [stateFilter, setStateFilter] = useState('');

  useEffect(() => {
  const originalArray = breweries;
  if (showFilters) {
    if (stateFilter !== '') {
      const stateFiltered = originalArray.filter(brewery => brewery.state.toLowerCase() === stateFilter);
      setDisplayedBreweries(stateFiltered);
      if (typeFilterState !== defaultTypeFilter) {
        const typeFiltered = filterByType(typeFilterState, stateFiltered);
        setDisplayedBreweries(typeFiltered);
      }
    } else {
      if (typeFilterCheck(typeFilterState)) {
        const typeFiltered = filterByType(typeFilterState, originalArray);
        setDisplayedBreweries(typeFiltered);
      } else {
        setDisplayedBreweries(originalArray);
      }
    }
  } else {
    setDisplayedBreweries(originalArray);
  }
  if (showMap) {
    setDisplayedBreweries(filterByHasCoordinates(displayedBreweries));
  }
}, [breweries, showMap]);

  return (
    <div>
      <h1>BreweryApp</h1>

      <div>

          <div>

            <SearchForm setBreweries={setBreweries} setShowMap={setShowMap} />

          </div>

          <div>

            <div>

              <button onClick={() => setShowFilters(!showFilters)}>Filters</button>

            </div>
            {
              showFilters && (
                <Filters setStateFilter={setStateFilter} typeFilterState={typeFilterState} setTypeFilterState={setTypeFilterState} />
              )
            }
          </div>

          <ListMapSwitch showMap={showMap} setShowMap={setShowMap} />

        </div>

        <div>
          {
            showMap && (
              <MapContainer arr={displayedBreweries} selectedBrewery={selectedBrewery}
                setSelectedBrewery={setSelectedBrewery} />
            )
          }
        </div>

        <div>
          {
            displayedBreweries && (
              displayedBreweries.map(b => (
                <div key={b.obdb_id.toString()}>
                  <RenderBrewery brewery={b} selectedBrewery={selectedBrewery} setSelectedBrewery={setSelectedBrewery} />
                </div>
              ))
            )
          }
        </div>

    </div>
  )
}
export { BreweryApp };
