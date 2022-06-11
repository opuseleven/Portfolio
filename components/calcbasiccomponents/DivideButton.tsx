import styles from '../../styles/Calculator.module.css';

interface DivideButtonProps {
  handleClick: VoidFunction
}

const DivideButton: React.FC<DivideButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.dividebutton}>
      <button className={styles.signbutton} onClick={handleClick}>/</button>
    </div>
  )
}
export { DivideButton };
