export const Error = () => <section className="m-8">
  <div className="mx-4 py-8 lg:w-1/2 lg:mx-auto lg:text-center lg:my-32 dark:text-white text-gray-700">
    <h1 className="text-xl font-semibold">Erreur lors du chargement de la page</h1>
    <p className="opacity-50 font-light lg:w-1/2 lg:mx-auto">
      La page demandée n'existe pas.<br />
      Vérifiez si une faute n'a pas été commise dans l'URL. Si le problème persiste, contactez l'administrateur :
    </p> 
    <a href="mailto:thomas@quark-lang.dev" className="text-blue-400 dark:text-blue-300">
      thomas@quark-lang.dev
    </a>
  </div>
</section>