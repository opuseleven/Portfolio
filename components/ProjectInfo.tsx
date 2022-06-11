import { Project } from '../types';
import styles from '../styles/Components.module.css';

interface ProjectInfoProps {
  project: Project
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {

  return (
    <div>

      <h4>{project.name}</h4>

      <ul className={styles.githublink}>
        <a href={project.github}><li>{project.github}</li></a>
      </ul>

      <p>{project.info}</p>

    </div>
  )
}
export { ProjectInfo };
