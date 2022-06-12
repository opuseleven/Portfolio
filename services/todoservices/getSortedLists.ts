import { ToDo } from '../../types';

function getSortedLists(arr: ToDo[]) {
  
  let todoArr: ToDo[] = [];
  let completedArr: ToDo[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].completed) {
      completedArr = completedArr.concat([arr[i]]);
    } else {
      todoArr = todoArr.concat([arr[i]]);
    }
  }
  return {
    todoArr,
    completedArr
  }
}
export { getSortedLists };
