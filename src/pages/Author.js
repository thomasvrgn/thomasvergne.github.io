import { useParams } from 'react-router';
import { Octokit } from '@octokit/rest';
import { useEffect, useState } from 'react';
import { fetchRouter } from '../utils/article';
import { ArticleCard } from './Blog';

export const Author = () => {
  const { slug } = useParams();
  const { REACT_APP_API_TOKEN } = process.env;
  const [ user, setUser ] = useState(undefined);
  const [ articles, setArticles ] = useState();
  const octo = new Octokit({
    auth: REACT_APP_API_TOKEN,
  });

  useEffect(() => {
    octo.users.getByUsername({
      username: slug,
    }).then(x => {
      setUser(x.data)
      fetchRouter().then(({ articles }) => {
        setArticles(articles.filter(x => x.author === slug));
      })
    })
      .catch(setUser(undefined));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return user !== undefined && user !== null && 'name' in user
    ? (
      <section className="relative z-10 lg:w-2/3 lg:mx-auto lg:my-16">
        <div className="h-32 lg:h-64 w-full relative z-[-1]">
          <img src={user.avatar_url} className="h-full w-full object-cover lg:rounded-t-2xl" alt="" />
          <span className="absolute inset-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-2xl backdrop-filter lg:rounded-t-2xl" />
        </div>
        <div className="mx-6">
          <img src={user.avatar_url} className="w-20 lg:w-32 lg:-mt-16 rounded-full -mt-12 border-4 border-white dark:border-gray-800" alt="" />
          <div className="flex flex-row">
            <div className="text-gray-700 dark:text-white mt-2 flex-auto">
              <h1 className="font-semibold text-2xl lg:text-3xl leading-6 flex flex-row items-center">
                {user.name}
                {'plan' in user && user.plan.name === 'pro' && (
                  <span className="ml-2 mt-1 text-sm bg-emerald-300 text-white bg-opacity-40 py-[1px] px-3 rounded-full uppercase">pro</span>
                )}
              </h1>
              <p className="opacity-60">
                @{user.login}
              </p>
            </div>
            <div className="flex-auto flex flex-col children:leading-5 items-end mt-2 dark:text-white">
              <span>
                <strong>{user.followers}</strong> <span className="opacity-80">abonnés</span>
              </span>
              <span>
                <strong>{user.following}</strong> <span className="opacity-80">abonnements</span>
              </span>
            </div>
          </div>
          <p className="mt-2 leading-4 text-gray-700 dark:text-white italic opacity-80 w-2/3 lg:text-lg">
            {user.bio}
          </p>
          <hr className="my-8 dark:opacity-25" />
          {articles && articles.length > 0
            ? (
              <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">Articles publiés</h1>
                <ul className="mt-6 space-y-8 lg:space-y-0 lg:gap-x-8 flex flex-col lg:flex-row lg:children:w-1/2 lg:mx-0">
                  {articles.map((x, i) => <ArticleCard article={x} key={i} />)}
                </ul>
              </div>
            )
            : <span className="text-gray-700 dark:text-white text-lg font-medium">{user.name || user.login} n'a publié aucun article !</span>
          }
        </div>
      </section>
    )
  : <div className="mx-4 py-8 lg:w-1/2 lg:mx-auto lg:text-center lg:my-32 dark:text-white text-gray-700">
    <h1 className="text-xl font-semibold">Récupération des données de l'utilisateur...</h1>
    <p className="opacity-50 font-light lg:w-1/2 lg:mx-auto">Si le chargement est long ou qu'un problème survient, entrez en contact avec moi via l'adresse mail</p> <a href="mailto:thomas@quark-lang.dev" className="text-emerald-400 dark:text-emerald-300">thomas@quark-lang.dev</a>
  </div>
}