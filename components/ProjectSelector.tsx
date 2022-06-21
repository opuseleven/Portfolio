import { useState, useEffect } from 'react';
import styles from '../styles/Components.module.css';

interface ProjectSelectorProps {
  selectedId: number,
  setSelectedId: React.Dispatch<React.SetStateAction<number>>
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ selectedId, setSelectedId }) => {

  const [id, setId] = useState(selectedId);

  useEffect(() => {
    setId(selectedId);
  }, [selectedId])

  return (
    <div className={styles.projectbuttoncontainer}>

      <button onClick={() => setSelectedId(1)}
        className={id === 1 ? styles.selectedprojectbutton : styles.projectbutton}
      >
        Calculator
      </button>

      <button onClick={() => setSelectedId(2)}
        className={id === 2 ? styles.selectedprojectbutton : styles.projectbutton}
      >
        ToDo App
      </button>

      <button onClick={() => setSelectedId(3)}
        className={id === 3 ? styles.selectedprojectbutton : styles.projectbutton}
      >
        Brewery Search
      </button>

      <button onClick={() => setSelectedId(4)}
        className={id === 4 ? styles.selectedprojectbutton : styles.projectbutton}
      >
        Weather App
      </button>

      <button onClick={() => setSelectedId(5)}
        className={id === 5 ? styles.selectedprojectbutton : styles.projectbutton}
      >
        RecordDataSearch
      </button>

    </div>
  )
}
export { ProjectSelector };
