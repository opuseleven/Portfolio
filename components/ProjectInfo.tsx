import { Project } from '../types';

interface ProjectInfoProps {
  project: Project
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {

  return (
    <div>

      <h4>{project.component}</h4>

      <ul>
        <li>{project.github}</li>
      </ul>

      <p>{project.info}</p>

    </div>
  )
}
export { ProjectInfo };
