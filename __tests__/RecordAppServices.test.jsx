import { artistMatch, filterByArtists, filterByHasType, getArtist, getReleasesUrl } from '../services/recordappservices';

describe('All RecordDataSearchApp services tests', () => {

  const artistData = require('../data/recordapptestdata/artistdata.json');
  const brokenTestResults = require('../data/recordapptestdata/brokentestresults.json');
  const releaseData = require('../data/recordapptestdata/releasedata.json');
  const releaseData2 = require('../data/recordapptestdata/releasedata2.json');
  const releaseList = require('../data/recordapptestdata/releaselist.json');
  const testResults = require('../data/recordapptestdata/testresults.json');

  it('artistMatch returns the searched artist from the list', () => {
    const testArtist = artistMatch(testResults, 'Haunted Like Human');
    expect(testArtist.id).toBe(7628210);
    expect(testArtist).toBe(testResults[1]);
  })

  it('artistMatch returns an error if artist can\'t be found', () => {
    const testTwo = artistMatch(testResults, 'none');
    expect(testTwo.title).toBe('Error: Artist Not Found');
  })

  it('filterByArtists filters out everything but artist results', () => {
    const artists = filterByArtists(testResults);
    expect(artists[0]['type']).toBe('artist');
    expect(artists.length).toBeLessThan(testResults.length);
  })

  it('filterByHasType filters data by has type property', () => {
    const test = filterByHasType(brokenTestResults);
    expect(test.length).toBeLessThan(brokenTestResults.length);
  })

  it('getArtist returns an artist', () => {
    const testArtist = getArtist(artistData[0]);
    expect(testArtist).toHaveProperty('title');
    expect(testArtist).toHaveProperty('type');
  })

  let releasesUrl = '';
  function setReleasesUrl(s) {
    releasesUrl = s;
  }

  function getReleaseUrl() {
    getReleasesUrl(artistData[0], setReleasesUrl);
  }

  it('getReleasesUrl retrieves releasesUrl data', async () => {
    getReleaseUrl();
    await new Promise(r => setTimeout(r, 3000));
    expect(releasesUrl).toBe('https://api.discogs.com/artists/7628210/releases')
  })
})
