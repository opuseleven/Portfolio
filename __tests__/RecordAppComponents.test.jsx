import { ArtistDetails, DisplayDetailedRelease, DisplayRelease, ReleaseDetails,
  RenderDiscogObj, RenderExtraArtist, RenderTrack, ResultsContainer, SearchBar,
  ResultsPageNav } from '../components/recordappcomponents';
import { defaultPagination } from '../types';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('All RecordDataSearchApp Component tests', () => {

  const artistData = require('../data/recordapptestdata/artistdata.json');
  const brokenTestResults = require('../data/recordapptestdata/brokentestresults.json');
  const releaseData = require('../data/recordapptestdata/releasedata');
  const releaseData2 = require('../data/recordapptestdata/releasedata2.json');
  const releaseList = require('../data/recordapptestdata/releaselist.json');
  const testResults = require('../data/recordapptestdata/testresults.json');


  it('ArtistDetails component renders and passes data', () => {
    render(<ArtistDetails artist={artistData[0]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Haunted Like Human');
  })

  it('DisplayDetailedRelease component renders', () => {
    render(<DisplayDetailedRelease detailedRelease={releaseData} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
  })

  it('DisplayRelease component renders', () => {
    render(<DisplayRelease release={releaseList[0]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Haunted Like Human');
    expect(screen.getByRole('list')).toBeDefined();
  })

  it('DetailedRelease info is displayed on "show details" click', async () => {
    render(<DisplayRelease release={releaseList[0]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Ghost Stories');
    await act(async () => {
      fireEvent.click(screen.getAllByRole('button')[0]);
      await new Promise((r) => setTimeout(r, 2000));
    })
    expect(screen.getAllByRole('heading')[3]).toHaveTextContent('Labels:')
  })

  it('ReleaseDetails component renders', async () => {
    const testUrl = 'https://api.discogs.com/artists/7628210/releases';
    render(<ReleaseDetails releasesUrl={testUrl} />);
    await act(async () => {
      await new Promise(r => setTimeout(r, 3000));
    })
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Tall Tales & Fables');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Haunted Like Human');
  })

  it('RenderDiscogObj component renders', () => {
    render(<RenderDiscogObj obj={releaseData.extraartists[2]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Bill Henderson')
  })

  it('RenderDiscogObj component renders with role prop', () => {
    render(<RenderDiscogObj obj={releaseData.extraartists[3]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('David Brock (8)');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Role: Percussion');
  })

  it('Component renders with entity_type_name prop', () => {
    render(<RenderDiscogObj obj={releaseData.companies[0]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Disc Makers');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Type: Manufactured By');
  })

  it('RenderExtraArtist component renders', () => {
    render(<RenderExtraArtist extraArtist={releaseData.extraartists[2]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Mastered By - Bill Henderson');
  })

  it('RenderTrack component renders', () => {
    render(<RenderTrack track={releaseData2.tracklist[1]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('2. Ohio');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Track length: 2:57');
  })

  it('Component renders with extraartists prop', () => {
    render(<RenderTrack track={releaseData2.tracklist[2]} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('3. City By The Sea');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Track length: 4:24');
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('Songwriter - David Brock (8)');
  })

  it('ResultsContainer component renders', () => {
    render(<ResultsContainer artist={artistData[0]} releasesUrl={'https://api.discogs.com/artists/7628210/releases'} />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Haunted Like Human');
  })

  let page = 1;
  function setPage(n) {
    page = n;
  }

  it('ResultsPageNav component renders', () => {
    render(<ResultsPageNav page={page} setPage={setPage} pagination={defaultPagination()} />);
    expect(screen.getByRole('heading')).toHaveTextContent('1');
  })

  it('ResultsPageNav UI function to update page state var', async () => {
    const testPagination = {
      page: 1,
      pages: 4,
      per_page: 5,
      item: 19,
      urls: {
        last: '',
        next: ''
      }
    }
    render(<ResultsPageNav page={page} setPage={setPage} pagination={testPagination} />);
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    expect(screen.getByRole('button')).toHaveTextContent('Next page');
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
      await new Promise(r => setTimeout(r, 1000));
    })
    expect(page).toBe(2);
  })

  it('SearchBar component renders', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button')).toHaveTextContent('Search');
  })
})
