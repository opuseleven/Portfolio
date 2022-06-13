import { coordinateCheck, filterByHasCoordinates, filterByType, getBrewery,
  handleSearchClick, typeFilterCheck } from '../services/breweryservices';

describe('All Brewery Services tests', () => {

  it('coordinateCheck returns true if lat & lon', () => {
    const expectedPass = getBrewery(1, "Test", "Brewpub", "123 Main St.", "Nashville", "Tennessee", "www.duckduckgo.com", -86.767960, 36.174465);
    expect(coordinateCheck(expectedPass)).toBe(true);
  })

  it('coordinateCheck returns false otherwise', () => {
    const expectedFail = getBrewery(2, "Test", "Brewpub", "123 Main St.", "Nashville", "Tennessee", "www.duckduckgo.com", "", "");
    expect(coordinateCheck(expectedFail)).toBe(false);
  })

  const testBreweries = require('../data/brewerytestdata');

  it('filterByHasCoordinates filters testArr properly', () => {
    const newArr = filterByHasCoordinates(testBreweries);
    expect(newArr.length).toBeLessThan(testBreweries.length);
  })

  it('filterByType service filters correctly', () => {
    const typeState = { micro: true, brewpub: true, contract: false, large: false, regional: false };
    const expectedBreweries = filterByType(typeState, testBreweries);
    expect(expectedBreweries[2].brewery_type).toBe('micro');
  })

  it('Additional filterByType test', () => {
    const newTypeState = { micro: false, brewpub: false, contract: false, large: false, regional: true };
    const expectedBreweries = filterByType(newTypeState, testBreweries);
    expect(expectedBreweries[0].brewery_type).toBe('regional');
  })

  it('Creates a new Brewery object and returns that object', () => {
    const expectedBrewery = {
      obdb_id: 1,
      name: "Test Brewery",
      brewery_type: "Microbrewery",
      street: "123 Street St.",
      city: "Nashville",
      state: "Tennessee",
      website_url: "www.duckduckgo.com",
      longitude: -86.767960,
      latitude: 36.174465
    }
    const brewery = getBrewery(1, "Test Brewery", "Microbrewery", "123 Street St.", "Nashville", "Tennessee", "www.duckduckgo.com", -86.767960, 36.174465);
    expect(brewery).toStrictEqual(expectedBrewery);
  })

  it('handleSearchClick functions to search database and setBreweries array', async () => {
    let breweries = [];
    function setBreweries(newArr) {
      breweries = newArr;
    }
    let searchTerm = "Nashville";
    handleSearchClick(searchTerm, setBreweries);
    await new Promise(r => setTimeout(r, 3000));
    expect(breweries.length).toBeGreaterThan(1);
  })

  it('typeFilterCheck checks the properties of TypeFilterState object', () => {
    const testState = {
      micro: false,
      brewpub: false,
      contract: false,
      large: false,
      regional: true
    }
    const testBool = typeFilterCheck(testState);
    expect(testBool).toBe(true);
  })

  it('Additional case returning true', () => {
    const testState = {
      micro: true,
      brewpub: false,
      contract: true,
      large: false,
      regional: false
    }
    const testBool = typeFilterCheck(testState);
    expect(testBool).toBe(true);
  })

  it('Returns false', () => {
    const testState = {
      micro: false,
      brewpub: false,
      contract: false,
      large: false,
      regional: false,
    }
    const testBool = typeFilterCheck(testState);
    expect(testBool).toBe(false);
  })
})
