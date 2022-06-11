import styles from '../../styles/Calculator.module.css';

interface ClearButtonProps {
  viewedNumber: number,
  sign: string,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>,
  setStoredNumber: React.Dispatch<React.SetStateAction<number>>,
  setSign: React.Dispatch<React.SetStateAction<string>>,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>,
  setDecimal: React.Dispatch<React.SetStateAction<boolean>>
}

const ClearButton: React.FC<ClearButtonProps> = ({ viewedNumber, sign, setViewedNumber, setStoredNumber, setSign, setNegative, setDecimal }) => {

  function handleClick() {
    if (viewedNumber !== 0) {
      setViewedNumber(0);
    } else {
      if (sign.length > 0) {
        setSign("");
      } else {
        setStoredNumber(0);
      }
    }
    setNegative(false);
    setDecimal(false);
  }

  return (
    <div className={styles.clearbuttoncontainer}>
      <button className={styles.clearbutton} onClick={() => handleClick()}>Clear</button>
    </div>
  )
}
export { ClearButton };
