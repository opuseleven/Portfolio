import { FC } from 'react';
import App from './Calc-Basic/pages';
import styles from '../styles/Components.module.css';

const CalcBasic: FC = () => {

  return (
    <div className={styles.calcappcontainer}>
      <App />
    </div>
  )
}
export { CalcBasic };
