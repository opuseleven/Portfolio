import { Artist, Release } from '../../types';
import { getArtist, filterByHasType } from '.';

function filterByArtists(data: any): Artist[] {
  const filteredList: (Artist | Release)[] = filterByHasType(data);
  const artistList = filteredList.filter(a => a['type'] === 'artist');
  const artistArr: Artist[] = artistList.map(a => getArtist(a));
  return artistArr;
}
export { filterByArtists };
