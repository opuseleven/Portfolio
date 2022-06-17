import styles from '../../styles/Calculator.module.css';

interface DivideButtonProps {
  handleClick: VoidFunction,
  sign: string
}

const DivideButton: React.FC<DivideButtonProps> = ({ handleClick, sign }) => {

  return (
    <div className={styles.dividebutton}>
      <button className={sign === '/' ? styles.selectedsignbutton : styles.signbutton}
        onClick={handleClick}>/</button>
    </div>
  )
}
export { DivideButton };
