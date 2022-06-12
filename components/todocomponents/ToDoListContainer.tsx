import { ToDo } from '../../types';

interface ToDoListContainerProps {
  arr: ToDo[],
  setArr: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoListContainer: React.FC<ToDoListContainerProps> = ({ arr, setArr }) => {

  return (
    <div>
    </div>
  )
}
export { ToDoListContainer };
