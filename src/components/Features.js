import { Title } from './utils/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

export const Features = () => <section>
  <Title>Avantages</Title>
  <ul className="pt-8 space-y-6">
    <Item icon={faBolt}>
      <h1>Rapidité</h1>
      <p>Les services que je propose sont rendus dans un temps défiant toute concurrence pour vous garantir une opérationnalité la plus rapide</p>
    </Item>
    <Item icon={faHeart}>
      <h1>Précision</h1>
      <p>La qualité est toujours au rendez-vous avec des outils à la pointe de la technologie, des méthodes pensées et repensées et surtout une bonne motivation</p>
    </Item>
    <Item icon={faStar}>
      <h1>Qualité</h1>
      <p>Un service toujours soigné, avec une assistance lors de l'installation si besoin est, une documentation pouvant être ajoutée...</p>
    </Item>
  </ul>
</section>

export const Item = ({ icon, children }) => {
  const [title, subtitle] = children;
  return <div className="flex flex-row items-start group hover:bg-gray-900 hover:bg-opacity-30 rounded-xl p-4 transform hover:-translate-y-1 transition-all duration-500 hover:cursor-pointer hover:shadow-lg">
    <div className="mr-4">
      <div className="w-16 h-16 relative bg-emerald-500 text-4xl shadow-lg flex items-center justify-center rounded-xl text-white transform transition-transform duration-500 group-hover:scale-110">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
    <header>
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="text-white text-opacity-50 font-light">{subtitle}</p>
    </header>
  </div>
}