import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, Toolbar } from '../components'
import Image from 'next/image';

const AboutMe: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Cody Clark's Development Portfolio - About Me</title>
        <meta name="description" content="Cody Clark's Development Portfolio About Me page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Banner />

        <Toolbar />

        <h3>About Me</h3>

        <p>
          The about me section will go here.
        </p>

      </main>

    </div>
  )
}
export default AboutMe;
