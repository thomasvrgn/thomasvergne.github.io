import { Title } from './utils/Title';
import { experiences } from './data/experiences.data';
import { Button } from './utils/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { getColorLanguage } from './Projects'; 
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const Experiences = () => <section className="" id="experiences">
  <header>
    <Title>
      Expériences
    </Title>
    <p className="mt-4 text-gray-600 text-opacity-90 dark:text-white dark:text-opacity-60">
      Vous retrouverez tout mon historique de travail en tant que développeur au sein de différents organismes...
    </p>
  </header>
  <div className="mt-8 space-y-8 xl:children:w-[calc(50%-2rem)] 2xl:children:w-[calc(33.3333%-2rem)] flex-wrap xl:space-y-0 xl:gap-8 xl:flex xl:flex-row 2xl:justify-around">
    {experiences.map(({ name, role, urls, image, description, language }, i) => 
      <div key={i} className="text-white bg-gray-900 p-4 px-6 rounded-2xl shadow-lg">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <span className="text-lg opacity-75 flex flex-auto justify-end">{role}</span>
        </div>
        <p className="my-4 opacity-90 min-h-[5rem]" id="article" dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className="relative">
          <img src={image} className="my-4 rounded-2xl" alt="" />
          <span className="absolute inset-0 h-full w-full backdrop-filter backdrop-blur-[2px] rounded-2xl backdrop-brightness-75"></span>
        </div>
        <div className="flex flex-row">
          <LinkSelect urls={urls} />
          <div className="flex flex-row items-center flex-auto justify-end">
            <span className={`relative h-4 w-4 rounded-full ${getColorLanguage(language)}`}>
              <span></span>
            </span>
            <p className="ml-2 font-medium dark:text-white text-gray-600">
              {language}
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
</section>

export const LinkSelect = ({ urls }) => {
  const [opened, setOpen] = useState(false);
  const select = useRef();
  useClickOutside(select, () => setOpen(false));
  return urls.length === 1
    ? <a rel="noreferrer" target="_blank" href={urls[0].url}>
        <Button>
          {urls[0].title}  
        </Button>  
      </a>
    : <div className="relative" ref={select}>
        <div className="relative z-10 children:flex children:items-center children:pr-5">
          <Button onClick={() => setOpen(!opened)}>
            Liens disponibles <FontAwesomeIcon icon={faCaretDown} className="mt-0.5 ml-5" />
          </Button>
        </div>
        <div className={`bg-white transform transition-all duration-200 shadow-lg mt-4 w-72 rounded-lg flex-col divide-y overflow-x-hidden absolute ${opened ? 'flex' : '-translate-y-4 pointer-events-none opacity-0'}`}>
          {urls.map(({ title, url, icon }, i) =>
            <a rel="noreferrer" target="_blank" href={url} key={i}>
              <span className="text-gray-800 font-semibold flex flex-row items-center hover:bg-gray-50 py-3 px-6">
                {title}
                <span className="flex flex-auto justify-end text-gray-700">
                  <FontAwesomeIcon icon={icon} className="text-2xl" />
                </span>
              </span>
            </a>
          )}
        </div>
      </div>
}