import { Project } from '../types';
import { CalcBasic, ToDoApp, BreweryApp, WeatherApp, RecordDataSearchApp } from '../components';
import { FC } from 'react';
import styles from '../styles/Components.module.css';

interface DisplayProjectProps {
  project: Project
}

const DisplayProject: FC<DisplayProjectProps> = ({ project }) => {

  return (
    <div className={styles.displayprojectcontainer}>

      <div>
        {
          project.id === 1 && (
            <div className={styles.calcappcontainer}>
              <CalcBasic />
            </div>
          )
        }
      </div>

      <div>
        {
          project.id === 2 && (
            <div className={styles.todoappcontainer}>
              <ToDoApp />
            </div>
          )
        }
      </div>

      <div>
        {
          project.id === 3 && (
            <div className={styles.breweryappcontainer}>
              <BreweryApp />
            </div>
          )
        }
      </div>

      <div>
        {
          project.id === 4 && (
            <div className={styles.weatherappcontainer}>
              <WeatherApp />
            </div>
          )
        }
      </div>

      <div>
        {
          project.id === 5 && (
            <div className={styles.recordsearchcontainer}>
              <RecordDataSearchApp />
            </div>
          )
        }
      </div>

    </div>
  )
}
export { DisplayProject };
