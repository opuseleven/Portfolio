import { Artist } from '../types';

function RecordDataError() {
  const error: Artist = {
    id: -1,
    type: 'error',
    title: 'Error: No results found',
    uri: '',
    resource_url: ''
  }
  const errorArr = [error];
  return errorArr;
}
export { RecordDataError };
