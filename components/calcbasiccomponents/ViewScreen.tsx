import styles from '../../styles/Calculator.module.css';

interface ViewScreenProps {
  number: number
}

const ViewScreen: React.FC<ViewScreenProps> = ({ number }) => {

  return (
    <div className={styles.viewscreen}>
      <h2 className={styles.viewednumberheader}>
        {number}
      </h2>
    </div>
  )
}
export { ViewScreen };
