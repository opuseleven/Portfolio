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
})
