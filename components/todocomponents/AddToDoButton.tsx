import { addNewToDo, getToDo } from '../../services/todoservices';
import styles from '../../styles/ToDo.module.css';
import { ToDo } from '../../types';

interface AddToDoButtonProps {
  arr: ToDo[],
  setArr: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const AddToDoButton: React.FC<AddToDoButtonProps> = ({ arr, setArr }) => {

  function handleClick() {
    const newId = arr.length + 1;
    const newToDo = getToDo(newId, '', false);
    addNewToDo(newToDo, arr, setArr);
  }

  return (
    <div className={styles.newtodobuttoncontainer}>
      <button onClick={handleClick} className={styles.newtodobutton}>+</button>
    </div>
  )
}
export { AddToDoButton}
