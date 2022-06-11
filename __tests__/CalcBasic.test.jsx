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
    // fix
    render(<EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
      sign={sign} setSign={setSign} setStoredNumber={setStoredNumber}
      setViewedNumber={setViewedNumber} setNegative={setNegative} setDecimal={setDecimal}
    />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(viewedNumber).toBe(9);
    expect(storedNumber).toBe(0);
    expect(sign).toBe("");
  })

  it('EqualsButton handles edge cases', () => {
    // fix
    render(<EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
      sign={sign} setSign={setSign} setStoredNumber={setStoredNumber}
      setViewedNumber={setViewedNumber} setNegative={setNegative} setDecimal={setDecimal}
    />);
    viewedNumber = 7;
    setSign("");
    negative = true;
    decimal = true;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(viewedNumber).toBe(7);
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })

  it('Negative button functions', () => {
    // fix
    render(<NegativeButton handleClick={handleNegativeClick(negative, viewedNumber, setNegative, setViewedNumber)} />);
    fireEvent.click(screen.getByText("+/-"));
    expect(negative).toBe(true);
  })

})
