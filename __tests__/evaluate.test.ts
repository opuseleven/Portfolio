import { evaluate } from '../services/calcservices';

describe('Evaluate function for CalcBasic', () => {

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
})
