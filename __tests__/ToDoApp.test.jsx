import { ToDoApp } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';

describe('ToDoApp component', () => {

  it('Component renders', () => {
    render(<ToDoApp />);
    expect(screen.getByRole('textbox')).toBeDefined();
  })

  it('Textbox updates', () => {
    render(<ToDoApp />);
    const headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[0], {target: {value: 'one'}});
    })
    expect(headings[0].value).toBe('one');
  })

  it('UI allows adding of list item', () => {
    render(<ToDoApp />);
    let headings = screen.getAllByRole('textbox');
    const buttons = screen.getAllByRole('button');
    act(() => {
      fireEvent.change(headings[0], {target: {value: 'one'}});
      fireEvent.click(buttons[0]);
    })
    headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[1], {target: {value: 'two'}});
    })
    expect(headings[0].value).toBe('one');
    expect(headings[1].value).toBe('two');
    act(() => {
      fireEvent.click(buttons[0]);
    })
    headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[2], {target: {value: 'three'}});
    })
    expect(headings[2].value).toBe('three');
    expect(headings.length).toBe(3);
  })

  it('UI allows removing of list item', () => {
    render(<ToDoApp />);
    let headings = screen.getAllByRole('textbox');
    let buttons = screen.getAllByRole('button');
    act(() => {
      fireEvent.change(headings[0], {target: {value: 'one'}});
      fireEvent.click(buttons[0]);
    })
    headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[1], {target: {value: 'two'}});
      fireEvent.click(buttons[0]);
    })
    headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[2], {target: {value: 'three'}});
    })
    expect(headings[0].value).toBe('one');
    expect(headings[1].value).toBe('two');
    expect(headings[2].value).toBe('three');
    expect(headings.length).toBe(3);
    buttons = screen.getAllByRole('button');
    act(() => {
      fireEvent.click(buttons[2]);
    })
    headings = screen.getAllByRole('textbox');
    expect(headings.length).toBe(2);
    expect(headings[0].value).toBe('one');
    expect(headings[1].value).toBe('three');
  })

  it('Clicking checkbox sorts list by completed', async () => {
    render(<ToDoApp />);
    let headings = screen.getAllByRole('textbox');
    let buttons = screen.getAllByRole('button');
    act(() => {
      fireEvent.change(headings[0], {target: {value: 'one'}});
      fireEvent.click(buttons[0]);
    })
    headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[1], {target: {value: 'two'}});
      fireEvent.click(buttons[0]);
    })
    headings = screen.getAllByRole('textbox');
    act(() => {
      fireEvent.change(headings[2], {target: {value: 'three'}});
    })
    expect(headings[0].value).toBe('one');
    expect(headings[1].value).toBe('two');
    expect(headings[2].value).toBe('three');
    expect(headings.length).toBe(3);
    let checkboxes = screen.getAllByRole('checkbox');
    await act(async () => {
      fireEvent.click(checkboxes[1]);
      await new Promise(r => setTimeout(r, 1000));
    })
    headings = screen.getAllByRole('textbox');
    expect(headings.length).toBe(3);
    expect(headings[0].value).toBe('one');
    expect(headings[1].value).toBe('three');
    expect(headings[2].value).toBe('two');
  })
})
