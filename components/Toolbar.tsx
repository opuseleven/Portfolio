import Link from 'next/link';

const Toolbar: React.FC = () => {
  return (
    <div>

      <Link href='/'>
      <button>Home</button>
      </Link>

      <Link href='/about'>
        <button>About Me</button>
      </Link>

      <Link href='/projects'>
        <button>Projects</button>
      </Link>

      <a href='https://github.com/opuseleven'>
        <button>GitHub</button>
      </a>

    </div>
  )
}
export { Toolbar };
