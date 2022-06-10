import { getProjectById } from '../services';

describe('getProjectById service', () => {

  const projectData = require('../data/projects.json');

  it('Returns a valid project from id', () => {
    const test1 = getProjectById(projectData, 2);
    expect(test1.component).toBe('todo-app');
  })

  it('Returns an error for nonvalid id', () => {
    const test2 = getProjectById(projectData, 7);
    expect(test2.info).toBe('Error: Project not found');
  })
})
