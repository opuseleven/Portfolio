function evaluate(numberOne: number, sign: string, numberTwo: number) {

  let returnValue = 0;

  if (sign === "+") {
    returnValue = numberOne + numberTwo;
  } else if (sign === "-") {
    returnValue = numberOne - numberTwo;
  } else if (sign === "*") {
    returnValue = numberOne * numberTwo;
  } else if (sign === "/") {
    returnValue = numberOne / numberTwo;
  }
  return returnValue;
}
export { evaluate };
