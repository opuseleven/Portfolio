import { useState, useEffect } from 'react';
import axios from 'axios';
import { Artist } from '../types';
import { SearchBar, ResultsContainer, SettingsToolbar } from '../components/recordappcomponents';
import { ArtistNotFoundError, RecordDataError } from '../errors';
import { filterByArtists, artistMatch, getReleasesUrl } from '../services/recordappservices';
import styles from '../styles/RecordApp.module.css';

const RecordDataSearchApp: React.FC = () => {

  const [artistSearch, setArtistSearch] = useState<string>('');

  const defaultArtist = ArtistNotFoundError();

  const [artist, setArtist] = useState<Artist>();
  const [data, setData] = useState<Object[]>([]);
  const [releasesUrl, setReleasesUrl] = useState<string>('');
  const token = process.env.TOKEN;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (artistSearch !== '') {
      axios
        .request({
          url: 'https://api.discogs.com/database/search?q=' + artistSearch,
          method: 'get',
          responseType: 'json',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Discogs token=' + token
          }
        })
        .then((res) => setData(res.data.results))
        .catch((err) => {
          console.log(err);
          const error = RecordDataError();
          setData(error);
        });
    }
  }, [artistSearch])

  useEffect(() => {
    const artistSearches: Artist[] = filterByArtists(data);
    const artistCheck = artistMatch(artistSearches, artistSearch);
    if (artistCheck.type === 'artist') {
      getReleasesUrl(artistCheck, setReleasesUrl);
      setArtist(artistCheck);
    } else if (data.length === 0) {
      setArtist(undefined);
    } else {
      setArtist(defaultArtist);
    }
  }, [data])

  return (
    <div className={darkMode ? styles.containerdark : styles.container}>

      <div className={darkMode ? styles.maindark : styles.main}>

      <SettingsToolbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 className={darkMode ? styles.titledark : styles.title}>
          RecordDataSearch
        </h1>

        <SearchBar setArtistSearch={setArtistSearch} />

        <div className={styles.infocontainer}>
          {
            !artist && (
              <h3 className={darkMode ? styles.infodark : styles.info}>
                Search by name of musical artist to see info on the artist&#39;s full discography. Spelling must be exact.
              </h3>
            )
          }
        </div>

        <div>
          {
            artist && (
              <ResultsContainer artist={artist} releasesUrl={releasesUrl} darkMode={darkMode} />
            )
          }
        </div>

      </div>

      <footer className={darkMode ? styles.footerdark : styles.footer}>
        <p className={darkMode ? styles.footertextdark : styles.footertext}>
          Data provided by <a href='www.discogs.com' target="_blank" rel="noreferrer">Discogs</a>
        </p>
      </footer>
    </div>
  )
}
export { RecordDataSearchApp };
