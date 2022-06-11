import styles from '../../styles/Calculator.module.css';

interface DecimalButtonProps {
  viewedNumber: number,
  decimal: boolean,
  setDecimal: React.Dispatch<React.SetStateAction<boolean>>
}

const DecimalButton: React.FC<DecimalButtonProps> = ({ viewedNumber, decimal, setDecimal  }) => {

  function handleClick() {
    if (!decimal) {
      setDecimal(true);
    } else {
      if ((viewedNumber % 1) === 0) {
        setDecimal(false);
      }
    }
  }

  return (
    <div className={styles.decimalbutton}>
      <button className={styles.bluebutton} onClick={() => handleClick()}>.</button>
    </div>
  )
}
export { DecimalButton };
