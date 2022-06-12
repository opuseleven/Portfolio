import { useState } from 'react';
import { ToDo } from '../types';
import { AddToDoButton, ToDoListContainer } from '../components/todocomponents';

const ToDoApp: React.FC = () => {

  const defaultItem = {
    id: 1,
    name: '',
    completed: false
  }

  const defaultList = [defaultItem];

  const [arr, setArr] = useState<ToDo[]>(defaultList);

  return (
    <div>
      <h1>ToDoApp</h1>

      <div>

        <AddToDoButton arr={arr} setArr={setArr} />

        <ToDoListContainer arr={arr} setArr={setArr} />

      </div>
    </div>
  )
}
export { ToDoApp };
