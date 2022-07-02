import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, Toolbar } from '../components'
import Image from 'next/image';
import styles from '../styles/AboutMe.module.css';

const AboutMe: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Cody Clark&#39;s Development Portfolio - About Me</title>
        <meta name="description" content="Cody Clark's Development Portfolio About Me page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Banner />

        <Toolbar />

        <h3>About Me</h3>

        <p>
          Welcome to my development portfolio! I&#39;m Cody, a folk musician living in Nashville, Tennessee. I&#39;m passionate about new technologies and developing modern, interactive web applications with React, and Typescript.
        </p>

        <Image src={`/about-images/CodyProfilePic.png`}
          alt='An image of Cody, as seen sitting in a field.'
          width={800} height={480}
        />

      </main>

      <footer className={styles.footer}>

        <p>View the source code <a href="https://github.com/opuseleven/Portfolio/blob/main/pages/about.tsx"
          target="_blank" rel="noreferrer">here</a></p>

      </footer>

    </div>
  )
}
export default AboutMe;
