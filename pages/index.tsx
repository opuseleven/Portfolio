import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner, Toolbar } from '../components';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cody Clark's Development Portfolio</title>
        <meta name="description" content="Cody Clark's Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Banner />

        <Toolbar />

      </main>

      <footer className={styles.footer}>

        <p>View the source code <a href="" target="_blank">here</a></p>

      </footer>
    </div>
  )
}

export default Home
