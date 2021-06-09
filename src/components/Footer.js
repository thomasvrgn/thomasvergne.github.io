import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faDiscord, faDev } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AnchorLink } from './Navbar';

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
      <Link to="/" className="flex flex-row items-center">
        <img src="https://avatars.githubusercontent.com/thomasvergne" className="w-16 h-16 rounded-full shadow-xl" alt="" />
        <span className="ml-4 text-xl font-semibold dark:text-white text-gray-700">Thomas Vergne</span>
      </Link>
      <div className="py-8 flex flex-col">
        <h1 className="uppercase text-lg dark:text-gray-400 text-gray-600 font-semibold text-opacity-95">Sections</h1>
        <div className="my-2 flex flex-col space-y-2 font-light children:hover:text-opacity-90 children:transition-colors children:duration-200 dark:children:text-white children:text-gray-700 dark:children:text-opacity-[70%] children:text-lg">
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
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="flex flex-row items-center gap-6 mt-8 children:cursor-pointer">
        {socialNetworks.map(({ icon, href }, index) => (
          <AnchorLink href={href} className="text-3xl text-gray-500 hover:text-gray-400 transition-colors duration-200" blank key={index}>
            <FontAwesomeIcon icon={icon} />
          </AnchorLink>
        ))}
      </div>
      <span className="mt-8 mb-4 text-lg text-gray-400 font-light">
        Fait par Thomas avec du <FontAwesomeIcon icon={faHeart} className="text-red-500 relative top-[1px] inline-block" />
      </span>
    </div>
  </footer>
}