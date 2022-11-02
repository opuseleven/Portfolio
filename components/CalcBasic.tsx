import { FC, useState } from 'react';
import { ViewScreen, ClearButton, NegativeButton, DivideButton, NumberButton,
  MultiplyButton, SubtractButton, AddButton, ZeroButton, DecimalButton,
  EqualsButton } from './calcbasiccomponents';
import { handleSignClick, handleNumberClick } from '../services/calcservices';
import styles from '../styles/Calculator.module.css';

const CalcBasic: FC = () => {

  const [viewedNumber, setViewedNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [sign, setSign] = useState("");
  const [negative, setNegative] = useState(false);
  const [decimal, setDecimal] = useState(false);


  return (
    <div className={styles.calculatorcontainer}>
      <span className={styles.calclogo}>
        Calc-Basic
      </span>

      <ViewScreen number={viewedNumber}/>

      <div className={styles.buttonscontainer}>
        <ClearButton viewedNumber={viewedNumber} sign={sign}
          setViewedNumber={setViewedNumber} setStoredNumber={setStoredNumber}
          setSign={setSign} setNegative={setNegative} setDecimal={setDecimal}
        />
        <NegativeButton negative={negative} viewedNumber={viewedNumber}
          setNegative={setNegative} setViewedNumber={setViewedNumber}
        />
        <DivideButton
          handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "/", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
          sign={sign}
        />
        <NumberButton number={7} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 7, negative, decimal))} />
        <NumberButton number={8} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 8, negative, decimal))} />
        <NumberButton number={9} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 9, negative, decimal))} />
        <MultiplyButton
          handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "*", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
          sign={sign}
        />
        <NumberButton number={4} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 4, negative, decimal))} />
        <NumberButton number={5} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 5, negative, decimal))} />
        <NumberButton number={6} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 6, negative, decimal))} />
        <SubtractButton
          handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "-", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
          sign={sign}
        />
        <NumberButton number={1} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 1, negative, decimal))} />
        <NumberButton number={2} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 2, negative, decimal))} />
        <NumberButton number={3} handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 3, negative, decimal))} />
        <AddButton
          handleClick={() => handleSignClick(viewedNumber, storedNumber, sign, "+", setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal)}
          sign={sign}
          />
        <ZeroButton handleClick={() => setViewedNumber(handleNumberClick(viewedNumber, 0, negative, decimal))} />
        <DecimalButton viewedNumber={viewedNumber} decimal={decimal}
          setDecimal={setDecimal}
        />
        <EqualsButton storedNumber={storedNumber} viewedNumber={viewedNumber}
          sign={sign} setSign={setSign} setStoredNumber={setStoredNumber}
          setViewedNumber={setViewedNumber} setNegative={setNegative}
          setDecimal={setDecimal} />
       </div>
    </div>
  )
}
export { CalcBasic };
