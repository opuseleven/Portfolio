import { AddButton, ClearButton, DecimalButton, DivideButton, EqualsButton,
  MultiplyButton, NegativeButton, NumberButton, SubtractButton, ViewScreen,
  ZeroButton } from '../components/calcbasiccomponents';
import { render, screen, act, fireEvent, renderHook } from '@testing-library/react';
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
    sign = s;
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

  it('DivideButton component renders', () => {
    render(<DivideButton />);
    expect(screen.getByRole('button')).toHaveTextContent('/');
  })

  it('EqualsButton component renders', () => {
    render(<EqualsButton />);
    expect(screen.getByRole('button')).toHaveTextContent('=');
  })

  it('MultiplyButton component renders', () => {
    render(<MultiplyButton />);
    expect(screen.getByRole('button')).toHaveTextContent('x');
  })

  it('NegativeButton component renders', () => {
    render(<NegativeButton />);
    expect(screen.getByRole('button')).toHaveTextContent('+/-');
  })

  it('NumberButton component renders', () => {
    render(<NumberButton number={7} />);
    expect(screen.getByRole('button')).toHaveTextContent('7');
  })

  it('SubtractButton component renders', () => {
    render(<SubtractButton />);
    expect(screen.getByRole('button')).toHaveTextContent('-');
  })

  it('ViewScreen component renders', () => {
    render(<ViewScreen number={0} />);
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  })

  it('ZeroButton component renders', () => {
    render(<ZeroButton />);
    expect(screen.getByRole('button')).toHaveTextContent('0');
  })
})
