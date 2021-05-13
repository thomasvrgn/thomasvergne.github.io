import { Title } from './utils/Title';

const contact = [
  { name: 'Discord', value: '@Thomas.#1111' },
  { name: 'Instagram', value: '_thomas.vergne' },
  { name: 'Twitter', value: 'thomasvergne_' },
  { name: 'Github', value: 'thomasvergne' },
  { name: 'Adresse mail', value: 'thomas@quark-lang.dev' },
]

export const Contact = () => <section>
  <Title>Moyens de contact</Title>
  <ul className="p-2 py-4 space-y-1 text-lg">
    {contact.map(({ name, value }) => (
      <li className="text-opacity-60 dark:text-white text-gray-800 font-light">
        {name}: 
        <span className="ml-1 font-semibold text-gray-700">{value}</span>
      </li>
    ))}
  </ul>
</section>