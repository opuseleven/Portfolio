import styles from '../../styles/ToDo.module.css';
import { ToDoView } from '.';
import { useState, useEffect } from 'react';
import { ToDo } from '../../types';

interface ToDoListProps {
  todolist: ToDo[],
  arr: ToDo[],
  setArr: React.Dispatch<React.SetStateAction<ToDo[]>>,
  sort: VoidFunction
}

const ToDoList: React.FC<ToDoListProps> = ({ todolist, arr, setArr, sort }) => {

  const [displayedList, setDisplayedList] = useState(todolist);

  useEffect(() => {
    setDisplayedList(todolist);
  }, [todolist])

  return (
    <div>
      {
        displayedList.map(t => (
          <div key={t.id.toString()} className={styles.todolist}>
            <ToDoView todo={t} arr={arr} setArr={setArr} sort={sort} />
          </div>
        ))
      }
    </div>
  )
}
export { ToDoList };
