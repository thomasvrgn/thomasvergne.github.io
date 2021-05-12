import { Title } from './utils/Title';
import { skills } from './data/skills.data';

export const Skills = () => {
  return <section>
    <Title>Compétences</Title>
    <ul className="px-4 py-8 space-y-6">
      {skills.map(({title, subtitle, image}) => (
        <Item image={image}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Item>
      ))}
    </ul>
  </section>
}

export const Item = ({ image, children }) => {
  const [title, subtitle] = children;
  return (
    <li className="flex flex-row items-center flex-wrap">
      <img src={image} alt="Item" className="flex-initial w-1/12" />
      <span className="ml-4 text-lg font-medium dark:text-white text-gray-700 flex-auto w-10/12">
        {title}
      </span>
      <span className="w-1/12 flex-initial"></span>
      <h1 className="ml-4 flex-auto w-10/12 dark:text-white dark:text-opacity-50 text-gray-600 text-opacity-70 dark:font-light">
        {subtitle}
      </h1>
    </li>
  );
}