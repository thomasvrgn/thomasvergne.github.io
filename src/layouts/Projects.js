import { useEffect, useState } from 'react';
import { Title } from '../components/utils/Title';
import { Button } from '../components/utils/Button';
import { octo } from '../utils/api';
import fetch from 'node-fetch';

export const Projects = () => {
  const [informations, setInformation] = useState([]);

  useEffect(() => {
    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=thomasvergne')
      .then(x => x.json())
      .then(setInformation)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <section id="projects">
    <Title>Projets</Title>
    <div className="pt-8 space-y-6 lg:flex lg:space-y-0 flex-wrap gap-5">
      {informations && Array.isArray(informations) && informations.map((response, index) => <Card response={response} key={index} />)}
    </div>
  </section>
};

export const getColorLanguage = (language) => {
  switch (language) {
    case 'TypeScript': return 'bg-blue-600';
    case 'Haskell': return 'bg-indigo-500';
    case 'Vue': return 'bg-blueGray-500';
    case 'Svelte': return 'bg-red-500';
    case 'JavaScript': return 'bg-yellow-400'
    default: return 'bg-gray-400';
  }
}

const Language = ({ language }) => <div className="flex flex-row items-center">
  <div className={`relative h-4 w-4 rounded-full ${getColorLanguage(language)}`}>
    <span></span>
  </div>
  <h1 className="ml-2 font-medium dark:text-white text-gray-600">{language}</h1>
</div>

export const formatName = (name) => name[0].toUpperCase() + name.slice(1).replace(/-/g, ' ');
const formatDescription = (description, maxLength = 50) =>
  description.slice(0, maxLength).length < description.length
    ? description.slice(0, maxLength) + '...'
    : description;

export const Card = ({ response }) => {
  const { description, link, repo, language, owner } = response;

  return <div className="dark:bg-gray-900 dark:bg-opacity-50 bg-gray-100 p-6 rounded-xl dark:shadow-lg min-h-56 lg:min-h-64 flex flex-col lg:w-[48%] xl:w-[calc(33.333%-1rem)]">
    <header className="mb-4 flex-auto">
      <div className="flex flex-row items-center md:flex-col md:items-start lg:items-center lg:flex-row">
        <h1 className="flex-auto text-2xl font-medium dark:text-white text-gray-700">{formatName(repo)}</h1>
        <span className="flex flex-auto justify-end dark:text-white text-opacity-75 text-gray-700">{owner}</span>
      </div>
      <p className="mt-1 text-lg dark:font-light dark:text-white dark:text-opacity-50 text-gray-600 text-opacity-70">{formatDescription(description, 125)}</p>
    </header>
    <div className="flex flex-row items-end">
      <div className="flex-auto">
        <Language language={language} />
      </div>
      <div className="flex flex-auto justify-end">
        <Button coloured href={link} blank>Accéder</Button>
      </div>
    </div>
  </div>
}

export const githubUser = 'Thomas';
export const fetchRepository = async (username = githubUser, repository) => {
  const res = await octo.repos.get({
    owner: username,
    repo: repository,
  });
  return res.data;
}