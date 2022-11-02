import { FC } from 'react';
import styles from '../styles/Components.module.css';

const Banner: FC = () => {

  return (
    <div className={styles.bannercontainer}>
      <h1>Cody Clark</h1>
      <h2>Development Portfolio</h2>
    </div>
  )
}
export { Banner };
