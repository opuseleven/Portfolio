import { Project } from '../types';

function projectNotFoundError(): Project {
  const notFoundError: Project = {
    id: -1,
    component: "Error: Project not found",
    info: "Error: Project not found",
    github: ""
  }
  return notFoundError;
}
export { projectNotFoundError };
