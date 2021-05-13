import { Title } from './utils/Title';
import { skills } from './data/skills.data';

export const Skills = () => <section>
  <Title>Compétences</Title>
  <ul className="px-4 pt-8 space-y-6">
    {skills.map(({title, subtitle, image}, index) => (
      <Item image={image} key={index}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Item>
    ))}
  </ul>
</section>

export const Item = ({ image, children }) => {
  const [title, subtitle] = children;
  return (
    <li className="flex flex-row items-center flex-wrap group">
      <img src={image} alt="Item" className="flex-initial w-1/12 transform transition-transform duration-1000 group-hover:scale-[1.2]" />
      <span className="ml-4 text-lg font-medium dark:text-white text-gray-700 flex-auto w-10/12">
        {title.props.children}
      </span>
      <span className="w-1/12 flex-initial"></span>
      <p className="ml-4 flex-auto w-10/12 dark:text-white dark:text-opacity-50 text-gray-600 text-opacity-70 dark:font-light">
        {subtitle.props.children}
      </p>
    </li>
  );
}