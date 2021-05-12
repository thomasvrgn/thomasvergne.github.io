import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
export function Navbar() {
  return <nav className="flex flex-col p-4">
    <div className="flex flex-row items-center">
      <div className="flex flex-auto items-center">
        <img src="https://cdn.discordapp.com/avatars/766231131720646666/a_4b77e86fd7c7de9b60d696fff4a0ce48.gif" className="w-24 h-24 rounded-xl shadow-lg" alt="" />
        <div className="ml-4">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">Thomas</h1>
          <p className="text-sm text-gray-700 text-opacity-90 dark:text-white dark:text-opacity-60 dark:font-light">
            Intégrateur Web<br/>
            Designer et concepteur de langages<br/>
            Passionné de mathématiques<br/>
          </p>
        </div>
      </div>
      <div className="flex flex-initial flex-col space-y-2 items-center text-3xl">
        <FontAwesomeIcon icon={faDiscord} className="text-indigo-500"  />
        <FontAwesomeIcon icon={faGithub} className="text-gray-800 dark:text-white" />
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
      </div>
    </div>
    <ul className="flex flex-col space-y-2 list-none py-2 dark:text-white text-gray-700 text-opacity-80 font-medium dark:text-opacity-70 children:hover:text-gray-100 children:transition-colors children:duration-150">
      <a 
        href="#presentation" >
        Présentation
      </a>
      <a 
        href="#skills" >
        Compétences
      </a>
      <a 
        href="#features" >
        Avantages
      </a>
      <a 
        href="#contact" >
        Moyens de contact
      </a>
    </ul>
  </nav>
}