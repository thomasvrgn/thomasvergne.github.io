import { createClient } from '@supabase/supabase-js';
import { useRef, useState } from 'react';
import { Button } from '../components/utils/Button';
import { Input } from '../components/utils/Input';

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_ENDPOINT,
  process.env.REACT_APP_SUPABASE_TOKEN,
);

export const Login = () => {
  const input = useRef(null);
  const [error, setError] = useState(undefined);
  
  const performLogin = async () => {
    console.log(input.current.value)
    const { error } = await supabase.auth.signIn({ 
      email: input.current.value,
    });
    setError(error);
  }
  
  const renderMessageError = (error) => {
    switch(error.status) {
      case 422: return 'Le format d\'email précisé est incorrect !';
      case 403: return 'Cet utilisateur n\'existe pas!';
      case 429: return 'Veuillez patientez 60 secondes avant de tenter de vous reconnecter !';
      default: return error.message;
    }
  }

  return <section className="flex justify-center py-8">
    {error !== undefined && 
      <div className="fixed bottom-0 w-full p-4 z-20 lg:w-1/2 lg:left-0">
        <div className="bg-gray-900 p-4 px-6 text-white text-lg font-medium rounded-xl dark:shadow-2xl">
          {error === null ? 'Veuillez vous connecter via le lien qui vous a été envoyé par mail' : renderMessageError(error)}
        </div>
      </div>}
    <form
      onSubmit={async e => { e.preventDefault(); await performLogin(); }}
      className="flex flex-col w-full m-8 dark:bg-gray-900 dark:bg-opacity-50 p-8 rounded-2xl border dark:border-none dark:shadow-xl lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Connexion
        </h1>
        <p className="text-gray-800 dark:text-white text-opacity-60 w-3/4">
          Utilisez l'adresse mail depuis laquelle vous avez été invité...
        </p>
      </header>
      <div className="space-y-4">
        <Input required ref={input}>
          Adresse mail
        </Input>
        <Button full>
          Connexion
        </Button>
      </div>
      <a href="/" className="mt-6 text-blue-500 dark:text-blue-300 hover:underline">
        Adresse mail oubliée
      </a>
    </form>
  </section>
}