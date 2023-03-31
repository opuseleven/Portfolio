import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner, Toolbar } from '../components';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cody Clark&#39;s Development Portfolio</title>
        <meta name="description" content="Cody Clark's Development Portfolio" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/CCMicon.ico" />
      </Head>

      <main className={styles.main}>

        <Banner />

        <Toolbar />

        <p>Everything you see here is built using Typescript & React.</p>

      </main>

      <footer className={styles.footer}>

        <p>View the source code <a href="https://github.com/opuseleven/Portfolio/blob/main/pages/index.tsx"
          target="_blank" rel="noreferrer">here</a>
        </p>

      </footer>
    </div>
  )
}

export default Home
