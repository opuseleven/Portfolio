import { ToDoApp } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';

describe('ToDoApp component', () => {

  it('Component renders', () => {
    render(<ToDoApp />);
    expect(screen.getByRole('textbox')).toBeDefined();
  })

  it('Add Todo button functions', () => {
    render(<ToDoApp />);
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    expect(screen.getAllByRole('textbox').length).toBe(2);
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    expect(screen.getAllByRole('textbox').length).toBe(3);
  })

  it('DeleteButton functions', () => {
    render(<ToDoApp />);
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    expect(screen.getAllByRole('textbox').length).toBe(3);
    act(() => {
      fireEvent.click(screen.getAllByText('x')[1]);
    })
    expect(screen.getAllByRole('textbox').length).toBe(2);
  })
})
