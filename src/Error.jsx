import Button from 'components/Button';
import Navigation from 'components/Navbar';
import { Link } from 'react-router-dom';

export default function Error() {
  return <>
    <Navigation />
    <section id="error-page" className="container 2xl:w-2/3 mx-auto pt-32 text-center">
      <h1 className="font-black text-6xl text-black pt-4">
        erreur
      </h1>
      <p className="text-xl w-1/2 text-black text-opacity-60 mx-auto mt-4">
        La page demandée n'a pas été trouvée ! Si vous pensez qu'il s'agit d'un bug, veuillez <a href="mailto:thomas.vergne@hotmail.com" className="text-blue-500 hover:underline">me contacter</a>
      </p>
      <Link to="/" className="children:mx-auto mt-8 inline-block">
        <Button>
          Retourner en lieu sûr
        </Button>
      </Link>
    </section>
  </>;
}