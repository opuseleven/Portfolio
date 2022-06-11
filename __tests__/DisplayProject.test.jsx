import { DisplayProject } from '../components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DisplayProject component', () => {

  const projects = require('../data/projects.json');

  it('Component renders', () => {
    render(<DisplayProject project={projects[0]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('0')
  })
  it('Changes with project prop', () => {
    render(<DisplayProject project={projects[1]} />);
    expect(screen.getByRole('heading')).toHaveTextContent('ToDoApp');
  })
})
