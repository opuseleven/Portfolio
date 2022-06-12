import { ToDo } from '../../types';

function updateCompleted(todo: ToDo, bool: boolean) {
  todo.completed = bool;
}
export { updateCompleted };
