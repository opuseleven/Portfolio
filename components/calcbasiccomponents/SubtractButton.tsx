import styles from '../../styles/Calculator.module.css';

interface SubtractButtonProps {
  handleClick: VoidFunction
}

const SubtractButton: React.FC<SubtractButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.subtractbutton}>
      <button className={styles.signbutton} onClick={handleClick}>-</button>
    </div>
  )
}
export { SubtractButton };
