import { evaluate, handleNumberClick, handleSignClick } from '../services/calcservices';

describe('CalcBasic services tests', () => {

  // evaluate() tests

  let total = 0;

  it('Evaluate adds correctly', () => {
    total = evaluate(11, "+", 22);
    expect(total).toBe(33);
  })

  it('Evaluate subtracts correctly', () => {
    total = evaluate(7, "-", 10.5);
    expect(total).toBe(-3.5);
  })

  it('Evaluate multiplies correctly', () => {
    total = evaluate(7, "*", 3);
    expect(total).toBe(21);
  })

  it('Evaluate divides correctly', () => {
    total = evaluate(100, "/", -20);
    expect(total).toBe(-5)
  })


  // handleNumberClick() tests

  let testNumber = 0;

  it('handleNumberClick service adds first number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, false, false);
    expect(testNumber).toBe(2);
  })

  it('handleNumberClick service adds a seconds clicked number to first number', () => {
    testNumber = handleNumberClick(2, 4, false, false);
    expect(testNumber).toBe(24);
  })

  it('handleNumberClick service adds a negative number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, true, false);
    expect(testNumber).toBe(-2);
  })

  it('handleNumberClick service adds a second number to a negative number', () => {
    testNumber = handleNumberClick(-2, 2, true, false);
    expect(testNumber).toBe(-22);
  })

  it('handleNumberClick service adds a decimal number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, false, true);
    expect(testNumber).toBe(.2);
  })

  it('handleNumberClick service adds a second clicked number to the first decimal number', () => {
    testNumber = handleNumberClick(.2, 2, false, true);
    expect(testNumber).toBe(.22);
  })

  it('handleNumberClick service adds a second clicked number to the first non-decimal number', () => {
    testNumber = handleNumberClick(1, 5, false, true);
    expect(testNumber).toBe(1.5);
  })

  it('handleNumberClick service adds a negative decimal number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, true, true);
    expect(testNumber).toBe(-.2);
  })

  it('handleNumberClick service adds a second clicked number to the first negative decimal number', () => {
    testNumber = handleNumberClick(-.2, 2, true, true);
    expect(testNumber).toBe(-.22);
  })

  it('handleNumberClick service adds a second clicked number to the first negative non-decimal number', () => {
    testNumber = handleNumberClick(-2, 2, true, true);
    expect(testNumber).toBe(-2.2);
  })

  it('handleNumberClick does not break with additional decimal places', () => {
    testNumber = handleNumberClick(1.2, 5, false, true);
    expect(testNumber).toBe(1.25);
  })

  it('handleNumberClick does not break with additional negative decimal places', () => {
    testNumber = handleNumberClick(-1.2, 5, true, true);
    expect(testNumber).toBe(-1.25);
  })


  // handleSignClick() tests

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
  let decimal = false;
  function setDecimal(bool) {
    decimal = bool;
  }
  let negative = false;
  function setNegative(bool) {
    negative = bool;
  }

  it('handleSignClick - if sign var is not already assigned, store number, and set sign', () => {
    viewedNumber = 45;
    handleSignClick(viewedNumber, storedNumber, sign, "/", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(45);
    expect(sign).toBe("/");
    expect(viewedNumber).toBe(0);
  })

  it('handleSignClick - if sign var is already assigned, evaluate current expression and store number and sign', () => {
    viewedNumber = 30;
    storedNumber = 10;
    sign = "*";
    handleSignClick(viewedNumber, storedNumber, sign, "-", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(300);
    expect(sign).toBe("-");
    expect(viewedNumber).toBe(0);
  })

  it('handleSignClick resets negative variable', () => {
    viewedNumber = -20;
    storedNumber = 1.5;
    sign = "-";
    negative = true;
    handleSignClick(viewedNumber, storedNumber, sign, "+", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(21.5);
    expect(viewedNumber).toBe(0);
    expect(sign).toBe("+");
    expect(negative).toBe(false);
  })

  it('handleSignClick resets decimal variable', () => {
    viewedNumber = 2.25;
    storedNumber = 5;
    sign = "*";
    decimal = true;
    handleSignClick(viewedNumber, storedNumber, sign, "+", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(11.25);
    expect(viewedNumber).toBe(0);
    expect(sign).toBe("+");
    expect(decimal).toBe(false);
  })

  it('handleSignClick handles edge cases', () => {
    viewedNumber = -0.15;
    storedNumber = 5;
    sign = "+";
    negative = true;
    decimal = true;
    handleSignClick(viewedNumber, storedNumber, sign, "*", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(4.85);
    expect(viewedNumber).toBe(0);
    expect(sign).toBe("*");
    expect(negative).toBe(false);
    expect(decimal).toBe(false);
  })
})
