import styles from '../../styles/Calculator.module.css';

interface AddButtonProps {
  handleClick: VoidFunction,
  sign: string
}

const AddButton: React.FC<AddButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.addbutton}>
      <button className={styles.signbutton} onClick={handleClick}>+</button>
    </div>
  )
}
export { AddButton };
