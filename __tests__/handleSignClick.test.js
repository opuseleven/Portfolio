import { handleSignClick } from '../services/calcservices';

describe('CalcBasic\'s handleSignClick service', () => {

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

  it('If sign variable is not already assigned, store number, and set sign', () => {
    viewedNumber = 45;
    handleSignClick(viewedNumber, storedNumber, sign, "/", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(45);
    expect(sign).toBe("/");
    expect(viewedNumber).toBe(0);
  })

  it('If sign var is already assigned, evaluate current expression and store number and sign', () => {
    viewedNumber = 30;
    storedNumber = 10;
    sign = "*";
    handleSignClick(viewedNumber, storedNumber, sign, "-", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal);
    expect(storedNumber).toBe(300);
    expect(sign).toBe("-");
    expect(viewedNumber).toBe(0);
  })

  it('Resets negative variable', () => {
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

  it('Resets decimal variable', () => {
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

  it('Handles edge cases', () => {
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
