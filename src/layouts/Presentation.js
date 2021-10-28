import { Button } from '../components/utils/Button';
import { Title } from '../components/utils/Title';

const diffDays = (date, otherDate) => Math.trunc(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24 * 365.25));

export const Presentation = () => {
  return <section className="md:w-3/5 lg:w-1/2" id="presentation">
    <Title>
      Présentation
    </Title>
    <p className="mt-4 text-gray-600 text-opacity-90 dark:text-white dark:text-opacity-60">
      Je m'appelle Thomas et ai actuellement {diffDays(new Date(2005, 9, 22), new Date(Date.now()))} ans. Je suis passionné désormais depuis 5 ans par l'informatique et un peu moins de deux ans par les mathématiques. J'ai commencé la conception de langages en cette année 2020.<br /><br />

      <span className="text-lg font-medium text-blue-800 dark:text-blue-300">
        N'hésitez pas à me poser des questions depuis mes moyens de contact...
      </span><br/><br/>

      Concernant mon parcours web, j'ai pu expérimenter divers bords et diverses approches comme le côté serveur, côté database, côté devops, mais ai préféré le côté client (front end) pour la créativité que ce dernier requiert.
    </p>
    <div className="mt-8">
      <Button coloured href="#contact">
        Me contacter
      </Button>
    </div>
  </section>
}