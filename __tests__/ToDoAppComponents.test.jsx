import { AddToDoButton, CompletedButton, DeleteButton, ToDoList, ToDoListContainer, ToDoView } from '../components/todocomponents';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ToDoApp Component Tests', () => {

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

  const arr = [testToDo1, testToDo2, testToDo3, testToDo4, testToDo5];

  // dummy function
  function sort() {
    // do nothing
  }

  it('AddToDoButton component renders', () => {
    render(<AddToDoButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+');
  })

  it('CompletedButton component renders', () => {
    render(<CompletedButton todo={testToDo1} sort={sort} />);
    expect(screen.getByRole('checkbox').checked).toBe(false);
  })

  it('DeleteButton component renders', () => {
    render(<DeleteButton />);
    expect(screen.getByRole('button')).toHaveTextContent('x');
  })

  it('ToDoList component renders & passes data', () => {
    render(<ToDoList todolist={arr} sort={sort} />)
    expect(screen.getAllByRole('textbox').length).toBe(5);
  })

  it('ToDoListContainer component renders', () => {
    render(<ToDoListContainer arr={arr} />);
    expect(screen.getAllByRole('textbox').length).toBe(5);
  })

  it('ToDoView component renders', () => {
    render(<ToDoView todo={testToDo1} sort={sort} />);
    expect(screen.getByRole('textbox')).toBeDefined();
  })
})
