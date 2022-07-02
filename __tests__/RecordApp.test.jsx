import { RecordDataSearchApp } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RecordDataSearchApp component', () => {

  it('Component renders', () => {
    render(<RecordDataSearchApp />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('RecordDataSearch');
  })

  it('UI functions to control application', async () => {
    render(<RecordDataSearchApp />);
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('RecordDataSearch');
    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {target: {value: 'haunted like human'}});
      fireEvent.click(screen.getAllByRole('button')[1]);
    })
    await act(async () => {
      await new Promise(r => setTimeout(r, 3000));
    })
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Haunted Like Human');
  })
})
