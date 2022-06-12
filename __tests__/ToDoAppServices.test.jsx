import { addNewToDo, getSortedLists, getToDo, removeToDo, updateCompleted, updateToDo } from '../services/todoservices';

describe('All ToDoApp services tests', () => {

  const testToDo1 = {
    id: 1,
    name: 'do something',
    completed: false
  }
  const testToDo2 = {
    id: 2,
    name: 'do something else',
    completed: false,
  }
  const testToDo3 = {
    id: 3,
    name: 'done something',
    completed: true
  }
  const testToDo4 = {
    id: 4,
    name: 'another one',
    completed: false
  }
  const testToDo5 = {
    id: 5,
    name: 'done something else',
    completed: true
  }
  let arr = [];
  function setArr(newArr) {
    arr = newArr;
  }
  const testArr = [testToDo1, testToDo2, testToDo3, testToDo4, testToDo5];

  it('addNewToDo service functions', () => {
    addNewToDo(testToDo1, arr, setArr);
    expect(arr[0].name).toBe('do something');
  })

  it('getSortedLists returns two sorted lists', () => {
    const sortedLists = getSortedLists(testArr);
    expect(sortedLists.todoArr.length).toBe(3);
    expect(sortedLists.completedArr.length).toBe(2);
  })

  it('getToDo returns a ToDo object', () => {
    const newToDo = getToDo(3, 'done something', true);
    expect(newToDo).toStrictEqual(testToDo3);
  })

  it('removeToDo service removes ToDo from arr', () => {
    removeToDo(testToDo4, testArr, setArr);
    expect(arr.length).toBe(4);
  })
})
