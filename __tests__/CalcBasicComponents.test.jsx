import { AddButton, ClearButton, DecimalButton, DivideButton, EqualsButton,
  MultiplyButton, NegativeButton, NumberButton, SubtractButton, ViewScreen,
  ZeroButton } from '../components/calcbasiccomponents';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('All CalcBasicComponent tests', () => {

  // test environment
  let viewedNumber = 0;
  function setViewedNumber(n) {
    viewedNumber = n;
  }
  let storedNumber = 0;
  function setStoredNumber(n) {
    storedNumber = n;
  }
  let sign = "";
  function setSign(s) {
    sign =  s;
  }
  let negative = false;
  function setNegative(bool) {
    negative = bool;
  }
  let decimal = false;
  function setDecimal(bool) {
    decimal = bool;
  }

  it('AddButton component renders', () => {
    render(<AddButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+');
  })

  it('ClearButton component renders', () => {
    render(<ClearButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Clear');
  })

  it('ClearButton functions', () => {
    render(<ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />);
    viewedNumber = 1;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(viewedNumber).toBe(0);
    sign = "+";
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(sign).toBe("");
    storedNumber = 4;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(storedNumber).toBe(0);
  })

  it('ClearButton clears Negative & Decimal booleans', () => {
    render(<ClearButton viewedNumber={viewedNumber} sign={sign} setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber} setSign={setSign} setNegative={setNegative} setDecimal={setDecimal} />);
    negative = true;
    decimal = true;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })

  storedNumber = 0;
  viewedNumber = 0;

  it('DecimalButton component renders', () => {
    render(<DecimalButton />);
    expect(screen.getByRole('button')).toHaveTextContent('.');
  })

  it('DecimalButton functions', () => {
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal} setDecimal={setDecimal} />);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(decimal).toBe(true);
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(decimal).toBe(false);
  })

  it('DecimalButton handles edge cases', () => {
    render(<DecimalButton viewedNumber={viewedNumber} decimal={decimal} setDecimal={setDecimal} />)
    decimal = true;
    viewedNumber = 2.5;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(decimal).toBe(true);
    viewedNumber = 2;
    act(() => {
      fireEvent.click(screen.getByRole('button'));
    })
    expect(decimal).toBe(false);
  })

  it('DivideButton component renders', () => {
    render(<DivideButton />);
    expect(screen.getByRole('button')).toHaveTextContent('/');
  })

  it('EqualsButton component renders', () => {
    render(<EqualsButton />);
    expect(screen.getByRole('button')).toHaveTextContent('=');
  })

  negative = false;
  decimal = false;
  storedNumber = 5;
  sign = "+";
  viewedNumber = 4;

  it('EqualsButton functions', () => {
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
})
