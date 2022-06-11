import styles from '../../styles/Calculator.module.css';

interface NumberButtonProps {
  number: number,
  handleClick: VoidFunction
}

const NumberButton: React.FC<NumberButtonProps> = ({ number, handleClick }) => {

  const numberstring = String(number);

  return (
    <div className={styles[`button${numberstring}`]}>
      <button className={styles.button} onClick={handleClick}>{number}</button>
    </div>
  )
}
export { NumberButton };
