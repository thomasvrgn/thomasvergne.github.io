import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faDiscord, faDev } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const socialNetworks = [
  { icon: faGithub, href: 'https://github.com/thomasvergne' },
  { icon: faTwitter, href: 'https://twitter.com/thomasvergne_' },
  { icon: faInstagram, href: 'https://instagram.com/_thomas.vergne' },
  { icon: faDiscord, href: 'https://discord.gg/YvMkKMJPvf' },
  { icon: faDev, href: 'https://dev.to/thomasvergne' },
];

export const Footer = () => {
  return <footer className="relative p-8 dark:bg-gray-900 dark:bg-opacity-50 bg-gray-100 mt-16">
    <div className="md:w-2/3 lg: mx-auto flex flex-col ">
      <div className="flex flex-row items-center">
        <img src="https://cdn.discordapp.com/avatars/766231131720646666/a_4b77e86fd7c7de9b60d696fff4a0ce48.gif" className="w-16 h-16 rounded-full shadow-xl" alt="" />
        <span className="ml-4 text-xl font-semibold dark:text-white text-gray-700">Thomas Vergne</span>
      </div>
      <div className="py-8 flex flex-col">
        <h1 className="uppercase text-lg dark:text-gray-400 text-gray-600 font-semibold text-opacity-95">Sections</h1>
        <ul className="my-2 flex flex-col space-y-2 font-light children:hover:text-opacity-90 children:transition-colors children:duration-200 dark:children:text-white children:text-gray-700 dark:children:text-opacity-[70%]">
          <a href="#presentation" className="text-lg">Présentation</a>
          <a href="#skills" className="text-lg">Compétences</a>
          <a href="#features" className="text-lg">Avantages</a>
          <a href="#projects" className="text-lg">Project</a>
          <a href="#contact" className="text-lg">Moyens de contact</a>
        </ul>
      </div>
      <hr className="border-gray-700" />
      <div className="flex flex-row items-center gap-6 mt-8">
        {socialNetworks.map(({ icon, href }) => (
          <a href={href} className="text-3xl text-gray-500 hover:text-gray-400 transition-colors duration-200" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <span className="mt-8 mb-4 text-lg text-gray-400 font-light">
        Fait par Thomas avec du <FontAwesomeIcon icon={faHeart} className="text-red-500 relative top-[1px] inline-block" />
      </span>
    </div>
  </footer>
}