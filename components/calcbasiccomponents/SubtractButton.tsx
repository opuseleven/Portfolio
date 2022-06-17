import styles from '../../styles/Calculator.module.css';

interface SubtractButtonProps {
  handleClick: VoidFunction,
  sign: string
}

const SubtractButton: React.FC<SubtractButtonProps> = ({ handleClick, sign }) => {

  return (
    <div className={styles.subtractbutton}>
      <button className={sign === '-' ? styles.selectedsignbutton : styles.signbutton}
        onClick={handleClick}>-</button>
    </div>
  )
}
export { SubtractButton };
