import styles from '../../styles/Calculator.module.css';

interface NegativeButtonProps {
  negative: boolean,
  viewedNumber: number,
  setNegative: React.Dispatch<React.SetStateAction<boolean>>,
  setViewedNumber: React.Dispatch<React.SetStateAction<number>>
}

const NegativeButton: React.FC<NegativeButtonProps> = ({ negative, viewedNumber, setNegative, setViewedNumber }) => {

  function handleClick() {
    if(viewedNumber === 0) {
      setNegative(!negative)
    } else {
      const newValue = viewedNumber * -1;
      setViewedNumber(newValue);
    }
  }

  return (
    <div className={styles.negativebutton}>
      <button className={styles.bluebutton} onClick={() => handleClick()}>+/-</button>
    </div>
  )
}
export { NegativeButton };
