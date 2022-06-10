import type { NextPage } from 'next';
import { Banner, Toolbar } from '../components'
import Image from 'next/image';

const AboutMe: NextPage = () => {
  return (
    <div>

      <Banner />

      <Toolbar />

      <h3>About Me</h3>

      <p>
        The about me section will go here.
      </p>

    </div>
  )
}
export default AboutMe;
