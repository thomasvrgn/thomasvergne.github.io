import { Title } from './utils/Title';
import { Input } from './utils/Input';
import { Mailto } from './utils/Mail';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram, faDiscord, faDev } from '@fortawesome/free-brands-svg-icons'

const contact = [
  { name: 'Discord', value: '@Thomas.#1111', icon: faDiscord, href: 'https://discord.gg/YvMkKMJPvf' },
  { name: 'Instagram', value: '_thomas.vergne', icon: faInstagram, href: 'https://www.instagram.com/_thomas.vergne/' },
  { name: 'Twitter', value: 'thomasvergne_', icon: faTwitter, href: 'https://twitter.com/thomasvergne_' },
  { name: 'Github', value: 'thomasvergne', icon: faGithub, href: 'https://github.com/thomasvergne' },
  { name: 'Adresse mail', value: 'thomas@quark-lang.dev', icon: faEnvelope, href: 'mailto:thomas@quark-lang.dev' },
  { name: 'Dev', value: '@thomasvergne', icon: faDev, href: 'https://dev.to/thomasvergne' },
]

export const Contact = () => {
  const [ inputs, setInputs ] = useState({});
  const setInput = (e) => {
    const filteredObject = Object.fromEntries(Object
      .entries(inputs)
      .filter(([_, val]) => val.length > 0));

    if (e.target.value.length === 0) {
      return setInputs(Object.fromEntries(Object
        .entries(filteredObject)
        .filter(([n, x]) => n !== e.target.id)));
    }

    return setInputs({
      ...filteredObject,
      [e.target.id]: e.target.value,
   });
  }

  const getInput = (id) => inputs[id];

  return <section className="mx-auto" id="contact">
    <Title>Me contacter</Title>
    <p className="text-white text-opacity-75 font-light">Faites-moi part de votre idée, de votre projet ou de votre produit et je vous répondrai sous les plus brefs délais</p>
    <div className="flex flex-col md:flex-row md:space-x-8">
      <div className="py-8 space-y-6 list-none flex-initial xl:w-1/4">
        <h1 className="text-xl font-medium text-white">Réseaux sociaux</h1>
        {contact.map(({ name, value, icon, href }, index) => (
          <li className="font-medium flex flex-row items-center text-white" key={index}>
            <FontAwesomeIcon icon={icon} className="text-xl mr-4" />
            <span className="text-opacity-50 text-white font-light">{name}: </span>
            <a className="ml-1" href={href} target="_blank" rel="noreferrer">{value}</a>
          </li>
        ))}
      </div>
      <div className="py-8 space-y-6 flex-auto xl:flex-initial xl:w-3/5" id="form">
        <Input id="firstname" onChange={setInput}>
          Prénom
        </Input>
        <Input id="lastname" onChange={setInput}>
          Nom de famille
        </Input>
        <Input id="project" onChange={setInput}>
          Nom du projet
        </Input>
        <Input id="price" onChange={setInput}>
          Budget théorique <span className="text-xs text-white text-opacity-40">(en euro)</span>
        </Input>
        <Input id="about" textarea onChange={setInput}>
          Dites-m'en plus<br />
          <ul className="text-xs text-white text-opacity-40 list-disc list-inside mb-1 ml-2">
            <li>Temps de rendu voulu</li>
            <li>Moyens de contact</li>
            <li>Technologies à utiliser</li>
            <li>Présentation de l'entreprise / association...</li>
          </ul>
        </Input>
        <Mailto 
          subject={`${getInput('lastname')} ${getInput('firstname')} - ${getInput('project')}`} 
          body={`Nom du projet: ${getInput('project')}\nTarif théorique: ${getInput('price')}\n Informations supplémentaires: ${getInput('about')}`}
          email="thomas@quark-lang.dev"
          full disabled={Object.entries(inputs).length === 5 ? false : true}>
          Me contacter
        </Mailto>
      </div>
    </div>
  </section>
}