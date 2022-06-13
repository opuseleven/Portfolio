import { ProjectNotFoundError } from '../errors';

describe('projectNotFoundError', () => {

  it('Returns an error as a Project type', () => {

    const errorProject = ProjectNotFoundError();
    expect(errorProject.info).toBe('Error: Project not found');
  })
})
