import { ArtistNotFoundError, RecordDataError, ReleasesNotFoundError } from '../errors';

describe('All RecordDataSearchApp errors tests', () => {

  it('ArtistNotFoundError returns an error as type Artist', () => {
    const testError = ArtistNotFoundError();
    expect(testError.title).toBe('Error: Artist Not Found');
  })

  it('RecordDataError returns an error as an array of artists', () => {
    const error = RecordDataError();
    expect(error[0].title).toBe('Error: No results found');
  })

  it('ReleasesNotFoundError returns an error message as an array of Releases', () => {
    const error = ReleasesNotFoundError();
    expect(error[0].title).toBe('Error: No releases found!');
  })
})
