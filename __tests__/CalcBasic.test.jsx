import { CalcBasic } from '../components';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CalcBasic application component', () => {

  it('component renders', () => {
    render(<CalcBasic />);
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  })

  it('1 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
});

  it('2 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2');
  });

  it('3 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('3'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('3');
  });

  it('4 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('4'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('4');
  });

  it('5 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5');
  });

  it('6 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('6'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('6');
  });

  it('7 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('7'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('7');
  });

  it('8 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('8'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('8');
  });

  it('9 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('9'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('9');
  });

  it('0 Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    act(() => {
      fireEvent.click(screen.getAllByRole('button')[15]);
    })
    expect(screen.getByRole('heading')).toHaveTextContent('10');
  });

  it('Clear Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1');
    act(() => {
      fireEvent.click(screen.getByText('Clear'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  });

  it('Decimal Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('1.5');
  });

  it('DecimalButton handles edge cases', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2.5');
    act(() => {
      fireEvent.click(screen.getByText('Clear'));
    })
    act(() => {
      fireEvent.click(screen.getByText('2'));
    })
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2');
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('2');
  })

  it('Negative Button functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('1'));
    })
    act(() => {
      fireEvent.click(screen.getByText('+/-'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('-1');
  });



  it('EqualsButton functions', () => {
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('9'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('9');
    act(() => {
      fireEvent.click(screen.getByText('+'));
    })
    act(() => {
      fireEvent.click(screen.getByText('5'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('5');
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('14');
  })

  it('EqualsButton handles edge cases', () => {
    // fix
    render(<CalcBasic />);
    act(() => {
      fireEvent.click(screen.getByText('7'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('7');
    act(() => {
      fireEvent.click(screen.getByText('+/-'));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('-7');
    act(() => {
      fireEvent.click(screen.getByText('.'));
    })
    act(() => {
      fireEvent.click(screen.getByText('='));
    })
    expect(screen.getByRole('heading')).toHaveTextContent('-7');
  })

  it('Negative button functions', () => {
    // fix
    render(<NegativeButton handleClick={handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber)} />);
    fireEvent.click(screen.getByText("+/-"));
    expect(negative).toBe(true);
  })

})
