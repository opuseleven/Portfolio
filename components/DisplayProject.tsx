import { Project } from '../types';
import { CalcBasic, ToDoApp, BreweryApp, WeatherApp } from '../components';
import styles from '../styles/Components.module.css';

interface DisplayProjectProps {
  project: Project
}

const DisplayProject: React.FC<DisplayProjectProps> = ({ project }) => {

  return (
    <div className={styles.displayprojectcontainer}>

      <div className={styles.calcappcontainer}>
        {
          project.id === 1 && (
            <CalcBasic />
          )
        }
      </div>

      <div className={styles.todoappcontainer}>
        {
          project.id === 2 && (
            <ToDoApp />
          )
        }
      </div>

      <div className={styles.breweryappcontainer}>
        {
          project.id === 3 && (
            <BreweryApp />
          )
        }
      </div>

      <div className={styles.weatherappcontainer}>
        {
          project.id === 4 && (
            <WeatherApp />
          )
        }
      </div>

    </div>
  )
}
export { DisplayProject };
