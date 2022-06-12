import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, Toolbar } from '../components'
import Image from 'next/image';
import styles from '../styles/AboutMe.module.css';

const AboutMe: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Cody Clark's Development Portfolio - About Me</title>
        <meta name="description" content="Cody Clark's Development Portfolio About Me page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Banner />

        <Toolbar />

        <h3>About Me</h3>

        <p>
          The about me section will go here.
        </p>

      </main>

      <footer className={styles.footer}>

        <p>View the source code <a href="" target="_blank">here</a></p>

      </footer>

    </div>
  )
}
export default AboutMe;
