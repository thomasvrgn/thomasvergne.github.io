import { Title } from './utils/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

export const Features = () => <section id="features">
  <Title>Avantages</Title>
  <ul className="pt-8 space-y-6 md:space-y-0 lg:gap-4 gap-y-6 xl:gap-5 md:flex flex-row flex-wrap">
    <Feature icon={faBolt}>
      <h1>Rapidité</h1>
      <p>Les services que je propose sont rendus dans un temps défiant toute concurrence pour vous garantir une opérationnalité la plus rapide</p>
    </Feature>
    <Feature icon={faHeart}>
      <h1>Précision</h1>
      <p>La qualité est toujours au rendez-vous avec des outils à la pointe de la technologie, des méthodes pensées et repensées et surtout une bonne motivation</p>
    </Feature>
    <Feature icon={faStar}>
      <h1>Qualité</h1>
      <p>Un service toujours soigné, avec une assistance lors de l'installation si besoin est, une documentation pouvant être ajoutée...</p>
    </Feature>
  </ul>
</section>

export const Feature = ({ icon, children }) => {
  const [title, subtitle] = children;
  return <div className="flex flex-row items-start group dark:hover:bg-gray-900 dark:hover:bg-opacity-30 rounded-xl p-4 dark:transform hover:-translate-y-1 transition-all duration-500 hover:cursor-pointer dark:hover:shadow-lg md:w-[48%] lg:w-[32%] md:flex-col lg:p-8">
    <div className="mr-4">
      <div className="w-16 h-16 relative bg-emerald-500 text-4xl shadow-lg flex items-center justify-center rounded-xl text-white transform transition-transform duration-500 group-hover:scale-110">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
    <header className="md:mt-4">
      <h1 className="text-2xl font-semibold dark:text-white text-gray-700">{title.props.children}</h1>
      <p className="dark:text-white dark:text-opacity-50 dark:font-light text-gray-600 text-opacity-70 lg:w-3/4">{subtitle.props.children}</p>
    </header>
  </div>
}