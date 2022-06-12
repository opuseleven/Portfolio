import { ToDo } from '../../types';

function addNewToDo(newToDo: ToDo, arr: ToDo[], setArr: React.Dispatch<React.SetStateAction<ToDo[]>>) {

  const addArr: ToDo[] = [newToDo];

  const newArr = arr.concat(addArr);

  setArr(newArr);

}
export { addNewToDo };
