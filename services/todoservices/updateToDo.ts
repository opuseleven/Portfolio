import { ToDo } from '../../types';

function updateToDo(todo: ToDo, value: string) {
  todo.name = value;
}
export { updateToDo };
