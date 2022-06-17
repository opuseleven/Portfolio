import styles from '../../styles/Calculator.module.css';

interface AddButtonProps {
  handleClick: VoidFunction,
  sign: string
}

const AddButton: React.FC<AddButtonProps> = ({ handleClick, sign }) => {

  return (
    <div className={styles.addbutton}>
      <button className={sign === '+' ? styles.selectedsignbutton : styles.signbutton}
        onClick={handleClick}>+</button>
    </div>
  )
}
export { AddButton };
