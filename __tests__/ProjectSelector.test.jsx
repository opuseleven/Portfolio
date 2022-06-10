import { ProjectSelector } from '../components';
import { render, screen, fireEvent, act } from '@testing-library/react';

describe('ProjectSelector component', () => {

  it('Component renders', () => {
    render(<ProjectSelector />);
    expect(screen.getAllByRole('button')).toBeDefined();
  })

  let selectedProjectId = 1;
  function setSelectedProjectId(num) {
    selectedProjectId = num;
  }

  it('Updates selectedProjectId variable', () => {
    render(<ProjectSelector selectedId={selectedProjectId} setSelectedId={setSelectedProjectId} />);
    const buttons = screen.getAllByRole('button');
    act(() => {
      fireEvent.click(buttons[2]);
    })
    expect(selectedProjectId).toBe(3);
  })
})
