import { ToDo } from '../../types';

function getToDo(id: number, name: string, completed: boolean) {
  const toDo: ToDo = {
    id: id,
    name: name,
    completed: completed
  }
  return toDo;
}
export { getToDo };
