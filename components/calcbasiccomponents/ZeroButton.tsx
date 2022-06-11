import styles from '../../styles/Calculator.module.css';

interface ZeroButtonProps {
  handleClick: VoidFunction
}

const ZeroButton: React.FC<ZeroButtonProps> = ({ handleClick }) => {

  return (
    <div className={styles.zerobutton}>
      <button className={styles.button} onClick={handleClick}>0</button>
    </div>
  )
}
export { ZeroButton };
