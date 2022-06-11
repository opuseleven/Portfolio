import { handleNumberClick } from '../services/calcservices';

describe('CalcBasic\'s handleNumberClick service', () => {

  let testNumber = 0;

  it('Adds first number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, false, false);
    expect(testNumber).toBe(2);
  })

  it('Adds a seconds clicked number to first number', () => {
    testNumber = handleNumberClick(2, 4, false, false);
    expect(testNumber).toBe(24);
  })

  it('Adds a negative number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, true, false);
    expect(testNumber).toBe(-2);
  })

  it('Adds a second number to a negative number', () => {
    testNumber = handleNumberClick(-2, 2, true, false);
    expect(testNumber).toBe(-22);
  })

  it('Adds a decimal number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, false, true);
    expect(testNumber).toBe(.2);
  })

  it('Adds a second clicked number to the first decimal number', () => {
    testNumber = handleNumberClick(.2, 2, false, true);
    expect(testNumber).toBe(.22);
  })

  it('Adds a second clicked number to the first non-decimal number', () => {
    testNumber = handleNumberClick(1, 5, false, true);
    expect(testNumber).toBe(1.5);
  })

  it('Adds a negative decimal number to replace 0', () => {
    testNumber = handleNumberClick(0, 2, true, true);
    expect(testNumber).toBe(-.2);
  })

  it('Adds a second clicked number to the first negative decimal number', () => {
    testNumber = handleNumberClick(-.2, 2, true, true);
    expect(testNumber).toBe(-.22);
  })

  it('Adds a second clicked number to the first negative non-decimal number', () => {
    testNumber = handleNumberClick(-2, 2, true, true);
    expect(testNumber).toBe(-2.2);
  })

  it('Does not break with additional decimal places', () => {
    testNumber = handleNumberClick(1.2, 5, false, true);
    expect(testNumber).toBe(1.25);
  })

  it('Does not break with additional negative decimal places', () => {
    testNumber = handleNumberClick(-1.2, 5, true, true);
    expect(testNumber).toBe(-1.25);
  })
})
