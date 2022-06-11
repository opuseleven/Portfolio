import styles from '../../styles/Calculator.module.css';

interface MultiplyButtonProps {
  handleClick: VoidFunction
}

const MultiplyButton: React.FC<MultiplyButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.multiplybutton}>
      <button className={styles.signbutton} onClick={handleClick}>x</button>
    </div>
  )
}
export { MultiplyButton };
