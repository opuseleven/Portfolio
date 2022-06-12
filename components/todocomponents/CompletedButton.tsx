import { updateCompleted } from '../../services/todoservices';
import styles from '../../styles/ToDo.module.css';
import { useState, useEffect } from 'react';
import { ToDo } from '../../types';

interface CompletedButtonProps {
  todo: ToDo,
  sort: VoidFunction
}

const CompletedButton: React.FC<CompletedButtonProps> = ({ todo, sort }) => {

  const [checked, setChecked] = useState(todo.completed);

  useEffect(() => {
    updateCompleted(todo, checked);
    sort();
  }, [checked])

  return (
    <div>
      <input type="checkbox" id="completedbutton" checked={checked} onChange={() => setChecked(!checked)} className={styles.checkbox} />
    </div>
  )
}
export { CompletedButton };
