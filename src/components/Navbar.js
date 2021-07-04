import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button, goTo } from './utils/Button';

export const AnchorLink = ({ children, href, blank = false, ...params }) => {
  return <span onClick={() => goTo(href, blank)} {...params}>
    {children}
  </span>;
}

export function Navbar({ session }) {
  return <nav className="flex flex-row flex-wrap p-4 xl:w-4/5 xl:mx-auto xl:py-8">
    <Link to="/" className="flex w-11/12 xl:w-4/12 items-center">
      <img src="https://avatars.githubusercontent.com/thomasvergne" className="w-24 h-24 rounded-xl shadow-xl" alt="" />
      <div className="ml-4">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">Thomas</h1>
        <p className="text-sm text-gray-700 text-opacity-90 dark:text-white dark:text-opacity-60 dark:font-light">
          Intégrateur Web<br/>
          Designer et concepteur de langages<br/>
          Passionné de mathématiques<br/>
        </p>
      </div>
    </Link>
    {/* <div className="flex flex-initial w-1/12 xl:w-2/12 flex-col space-y-2 xl:space-y-0 xl:space-x-6 justify-center items-end xl:flex-row xl:items-start xl:order-last xl:mt-1">
      <AnchorLink href="https://discord.gg/YvMkKMJPvf" blank>
        <FontAwesomeIcon icon={faDiscord} className="text-indigo-500" />
      </AnchorLink>
      <AnchorLink href="https://github.com/thomasvergne" blank>
        <FontAwesomeIcon icon={faGithub} className="text-gray-800 dark:text-white" />
      </AnchorLink>
      <AnchorLink href="https://twitter.com/thomasvergne_" blank>
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
      </AnchorLink>
      
    <Button>
      Espace client
    </Button>
    </div> */}
    <div className="flex flex-col xl:flex-row xl:flex-auto space-y-3 xl:space-y-0 xl:space-x-4 list-none py-2 dark:text-white text-gray-700 text-opacity-80 font-medium dark:text-opacity-70 children:hover:text-gray-800 children:transition-colors children:duration-150 dark:children:hover:text-white xl:justify-end xl:h-10 xl:items-center">
      <HashLink to="/#presentation">
        Présentation
      </HashLink>
      <HashLink to="/#skills">
        Compétences
      </HashLink>
      <HashLink to="/#features">
        Avantages
      </HashLink>
      <HashLink to="/#projects">
        Projets
      </HashLink>
      <HashLink to="/#contact">
        Moyens de contact
      </HashLink>
      <Link to="/blog">
        Blog
      </Link>
      <Link to={session !== null ? '/dashboard' : '/login' }>
        <Button>
          {session !== null ? 'Espace client'  : 'Connexion'}
        </Button>
      </Link>
    </div>
  </nav>
}