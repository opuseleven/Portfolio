import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Components.module.css';

const Toolbar: FC = () => {
  return (
    <div className={styles.toolbar}>

      <Link href='/'>
        <button className={styles.navbutton}>Home</button>
      </Link>

      <Link href='/about'>
        <button className={styles.navbutton}>About Me</button>
      </Link>

      <Link href='/projects'>
        <button className={styles.navbutton}>Projects</button>
      </Link>

      <a href='https://github.com/opuseleven' target='_blank' rel="noreferrer">
        <button className={styles.navbutton}>GitHub</button>
      </a>

    </div>
  )
}
export { Toolbar };
