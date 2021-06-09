import { useEffect, useState } from 'react';
import { Title } from './utils/Title';
import { Button } from './utils/Button';
import { Octokit } from '@octokit/rest';

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

  return <section id="projects">
    <Title>Projets</Title>
    <div className="pt-8 space-y-6 md:flex md:space-y-0 flex-wrap gap-5">
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

  return <div className="dark:bg-gray-900 dark:bg-opacity-50 bg-gray-100 p-6 rounded-xl dark:shadow-lg min-h-56 md:min-h-64 flex flex-col md:w-[48%] lg:w-[32%]">
    <header className="mb-4 flex-auto">
      <div className="flex flex-row items-center md:flex-col md:items-start lg:items-center lg:flex-row">
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
        <Button coloured href={html_url} blank>Accéder</Button>
      </div>
    </div>
  </div>
}
const { REACT_APP_API_TOKEN } = process.env;
const octo = new Octokit({
  auth: REACT_APP_API_TOKEN,
});
export const githubUser = 'Thomas';
export const fetchRepository = async (username = githubUser, repository) => {
  const res = await octo.repos.get({
    owner: username,
    repo: repository,
  });
  return res.data;
}