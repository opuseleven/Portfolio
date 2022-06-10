import { projectNotFoundError } from '../errors';

describe('projectNotFoundError', () => {

  it('Returns an error as a Project type', () => {

    const errorProject = projectNotFoundError();
    expect(errorProject.info).toBe('Error: Project not found');
  })
})
