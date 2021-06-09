import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export function Navbar() {
  return <nav className="flex flex-row flex-wrap p-4 xl:w-4/5 xl:mx-auto xl:py-8">
    <div className="flex w-11/12 xl:w-4/12 items-center">
      <img src="https://cdn.discordapp.com/avatars/766231131720646666/a_e3d82f8dde9350ce924d729215873c24.gif" className="w-24 h-24 rounded-xl shadow-xl" alt="" />
      <div className="ml-4">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">Thomas</h1>
        <p className="text-sm text-gray-700 text-opacity-90 dark:text-white dark:text-opacity-60 dark:font-light">
          Intégrateur Web<br/>
          Designer et concepteur de langages<br/>
          Passionné de mathématiques<br/>
        </p>
      </div>
    </div>
    <div className="flex flex-initial w-1/12 xl:w-2/12 flex-col space-y-2 xl:space-y-0 xl:space-x-6 justify-center items-end text-3xl xl:flex-row xl:items-start xl:order-last xl:mt-1">
      <a href="https://discord.gg/YvMkKMJPvf" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faDiscord} className="text-indigo-500" />
      </a>
      <a href="https://github.com/thomasvergne" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-gray-800 dark:text-white" />
      </a>
      <a href="https://twitter.com/thomasvergne_" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
      </a>
    </div>
    <ul className="flex flex-col xl:flex-row xl:flex-initial space-y-2 xl:space-y-0 xl:space-x-4 list-none py-2 dark:text-white text-gray-700 text-opacity-80 font-medium dark:text-opacity-70 children:hover:text-gray-800 children:transition-colors children:duration-150 dark:children:hover:text-white xl:w-6/12 xl:justify-end">
      <a href="#presentation">
        Présentation
      </a>
      <a href="#skills">
        Compétences
      </a>
      <a href="#features">
        Avantages
      </a>
      <a href="#projects">
        Projets
      </a>
      <a href="#contact">
        Moyens de contact
      </a>
      <Link to="/blog">
        Blog
      </Link>
    </ul>
  </nav>
}