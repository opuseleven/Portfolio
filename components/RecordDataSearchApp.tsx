import { useState, useEffect } from 'react';
import axios from 'axios';
import { Artist } from '../types';
import { ArtistNotFoundError } from '../errors';
import styles from '../styles/RecordApp.module.css';

const RecordDataSearchApp: React.FC = () => {

  const [artistSearch, setArtistSearch] = useState<string>('');

    const defaultArtist = ArtistNotFoundError();

    const [artist, setArtist] = useState<Artist>();
    const [data, setData] = useState<Object[]>([]);
    const [releasesUrl, setReleasesUrl] = useState<string>('');
    const token = process.env.TOKEN;

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
            const error = dataError();
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
      <div className={styles.container}>

        <div className={styles.main}>

          <h1 className={styles.title}>
            RecordDataSearch
          </h1>

          <SearchBar setArtistSearch={setArtistSearch} />

          <div className={styles.infocontainer}>
            {
              !artist && (
                <h3 className={styles.info}>
                  Search by name of musical artist to see info on the artist's full discography. Spelling must be exact.
                </h3>
              )
            }
          </div>

          <div>
            {
              artist && (
                <ResultsContainer artist={artist} releasesUrl={releasesUrl} />
              )
            }
          </div>

        </div>

        <footer className={styles.footer}>
          <p>Data provided by Discogs</p>
        </footer>
      </div>
    )
}
export { RecordDataSearchApp };
