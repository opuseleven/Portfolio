import { BreweryTypeFilters, Filters, ListMapSwitch, MapContainer, PopupContents,
  RenderBrewery, SearchForm, StateSelector } from '../components/brewerycomponents';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { filterByHasCoordinates, getBrewery } from '../services/breweryservices';

describe('All BreweryApp component tests', () => {

  // set up test variables
  let typeFilters = {
    micro: false,
    brewpub: false,
    contrat: false,
    large: false,
    regional: false
  }

  it('BreweryTypeFilters component renders', () => {
    render(<BreweryTypeFilters typeFilters={typeFilters} />);
    expect(screen.getAllByRole('checkbox')).toBeDefined();
  })

  it('Filters component renders', () => {
    render(<Filters typeFilterState={typeFilters} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('--select state--');
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[1].id).toBe('brewpub');
  })

  it('ListMapSwitch component renders', () => {
    render(<ListMapSwitch showMap={false} />);
    expect(screen.getByRole('button')).toHaveTextContent('Show Map');
  })

  it('ListMapSwitch renders correctly if showMap=true', () => {
    render(<ListMapSwitch showMap={true} />);
    expect(screen.getByRole('button')).toHaveTextContent("Hide Map");
  })

  const testData = require('../data/brewerytestdata.json');
  const arr = filterByHasCoordinates(testData);

  let selectedBrewery = arr[0];
  function setSelectedBrewery(b) {
    selectedBrewery = b;
  }

  it('MapContainer component renders', () => {
    render(<MapContainer arr={arr} selectedBrewery={selectedBrewery} setSelectedBrewery={setSelectedBrewery} />);
    expect(screen.getByRole('map')).toBeDefined();
  })

  const testBrewery = getBrewery(1, 'Test Brewery', 'Microbrewery', '123 Test St.', 'Nashville', 'Tennessee', 'www.duckduckgo.com');

  it('PopupContents component renders', () => {
    render(<PopupContents brewery={testBrewery} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test Brewery');
  })

  it('RenderBrewery component renders and passes data', () => {
    render(<RenderBrewery brewery={testBrewery} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test Brewery');
    expect(screen.getByRole('link')).toHaveTextContent('www.duckduckgo.com');
  })

  it('SearchForm component renders', () => {
    render(<SearchForm />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
  })

  let stateFilter = '';
  function setStateFilter(str) {
    stateFilter = str;
  }

  it('StateSelector component renders', () => {
    render(<StateSelector setStateFilter={setStateFilter} />);
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('--select state--');
    expect(options[1]).toHaveTextContent('Alabama');
  })

  it('StateSelector changes state value', () => {
    render(<StateSelector setStateFilter={setStateFilter} />);
    const selector = screen.getByRole('combobox');
    act(() => {
      fireEvent.change(selector, {target: {value: "alaska"}});
    })
    expect(stateFilter).toBe('alaska');
  })
})
