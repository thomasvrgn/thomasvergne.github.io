import { useEffect, useState } from 'react';
import { Title } from './utils/Title';
import { Button } from './utils/Button';

export const Projects = () => {
  const [informations, setInformation] = useState([]);

  const projects = [
    { username: 'thomasvergne', repository: 'haskell-vm', name: 'Haskell VM' },
    { username: 'thomasvergne', repository: 'haskell-brainfuck', name: 'Haskell Brainfuck' },
    { username: 'quark-lang', repository: 'quark', },
    { username: 'thomasvergne', repository: 'make-your-text-great-again' },
    { username: 'thomasvergne', repository: 'graphix-website', },
    { username: 'thomasvergne', repository: 'tailwindui', name: 'TailwindUI' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = [];
      for (const { username, repository, name } of projects) {
        const res = await fetchRepository(username, repository);
        result.push(name !== undefined ? {...res, name} : res);
      }
      return result;
    }
    fetchData().then(setInformation);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <section>
    <Title>Projets</Title>
    <div className="pt-8 space-y-6">
      {informations.map((response, index) => <Card response={response} key={index} />)}
    </div>
  </section>
};

const getColorLanguage = (language) => {
  switch (language) {
    case 'TypeScript': return 'bg-blue-600';
    case 'Haskell': return 'bg-indigo-500';
    case 'Vue': return 'bg-blueGray-500';
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

const formatName = (name) => name[0].toUpperCase() + name.slice(1).replace(/-/g, ' ');

export const Card = ({ response }) => {
  const { description, html_url, name, language, owner } = response;
  const { login} = owner;

  return <div className="dark:bg-gray-900 dark:bg-opacity-50 bg-gray-100 p-6 rounded-xl dark:shadow-lg h-56 flex flex-col">
    <header className="mb-4 flex-auto">
      <div className="flex flex-row items-center">
        <h1 className="flex-auto text-2xl font-medium dark:text-white text-gray-700">{formatName(name)}</h1>
        <span className="flex flex-auto justify-end dark:text-white text-opacity-75 text-gray-700">{login}</span>
      </div>
      <p className="mt-1 text-lg dark:font-light dark:text-white dark:text-opacity-50 text-gray-600 text-opacity-70">{description}</p>
    </header>
    <div className="flex flex-row items-end">
      <div className="flex-auto">
        <Language language={language} />
      </div>
      <div className="flex flex-auto justify-end">
        <Button coloured href={html_url}>Accéder</Button>
      </div>
    </div>
  </div>
}

export const githubUser = 'Thomas';
export const fetchRepository = async (username = githubUser, repository) => {
  const response = await fetch(`https://api.github.com/repos/${username}/${repository}`);
  const json = await response.json();
  return json;
}