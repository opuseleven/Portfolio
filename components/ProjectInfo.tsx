import { Project } from '../types';
import { FC } from 'react';
import styles from '../styles/Components.module.css';

interface ProjectInfoProps {
  project: Project
}

const ProjectInfo: FC<ProjectInfoProps> = ({ project }) => {

  return (
    <div className={styles.projectinfocontainer}>

      <h4>{project.name}</h4>

      <ul className={styles.githublink}>
        <a href={project.github}><li>{project.github}</li></a>
      </ul>

      <p>{project.info}</p>

    </div>
  )
}
export { ProjectInfo };
