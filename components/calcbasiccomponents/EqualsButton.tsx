import { evaluate } from '../../services/calcservices';
import styles from '../../styles/Calculator.module.css';

interface EqualsButtonProps {
  storedNumber: number,
  viewedNumber: number,
  sign: string,
  setSign: React.Dispatch<React.SetStateAction<string>>,
  setStoredNumber: React.Dispatch<React.SetStateAction<number>>,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>,
  setDecimal: React.Dispatch<React.SetStateAction<boolean>>
}

const EqualsButton: React.FC<EqualsButtonProps> = ({ storedNumber, viewedNumber, sign, setSign, setStoredNumber, setViewedNumber, setNegative, setDecimal }) => {

  function handleClick() {
    let total: number;
    if (sign.length < 1) {
      total = viewedNumber;
    } else {
      total = evaluate(storedNumber, sign, viewedNumber);
    }
    setStoredNumber(0);
    setSign("");
    setNegative(false);
    setDecimal(false);
    setViewedNumber(total);
  }

  return (
    <div className={styles.equalsbuttoncontainer}>
      <button className={styles.equalsbutton} onClick={() => handleClick()}>=</button>
    </div>
  )
}
export { EqualsButton };
