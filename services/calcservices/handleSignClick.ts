import { evaluate } from '.';

function handleSignClick(viewedNumber: number, storedNumber: number, sign: string, newSign: string,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>, setStoredNumber: React.Dispatch<React.SetStateAction<number>>,
  setSign: React.Dispatch<React.SetStateAction<string>>, setNegative: React.Dispatch<React.SetStateAction<boolean>>,
  setDecimal: React.Dispatch<React.SetStateAction<boolean>>) {

  if (sign.length > 0) {
    setStoredNumber(evaluate(storedNumber, sign, viewedNumber))
  } else {
    setStoredNumber(viewedNumber);
  }
  setSign(newSign);
  setNegative(false);
  setDecimal(false);
  setViewedNumber(0);
}
export { handleSignClick };
