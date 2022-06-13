import { Project } from '../types';

function ProjectNotFoundError(): Project {
  const notFoundError: Project = {
    id: -1,
    name: "Error: Project not found",
    info: "Error: Project not found",
    github: ""
  }
  return notFoundError;
}
export { ProjectNotFoundError };
