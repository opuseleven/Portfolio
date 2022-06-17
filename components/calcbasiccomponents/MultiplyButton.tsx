import styles from '../../styles/Calculator.module.css';

interface MultiplyButtonProps {
  handleClick: VoidFunction,
  sign: string
}

const MultiplyButton: React.FC<MultiplyButtonProps> = ({ handleClick, sign }) => {

  return (
    <div className={styles.multiplybutton}>
      <button className={sign === '*' ? styles.selectedsignbutton : styles.signbutton}
        onClick={handleClick}>x</button>
    </div>
  )
}
export { MultiplyButton };
