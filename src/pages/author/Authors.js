import { useEffect, useState } from 'react';
import { articles as fetched, octo } from '../../utils/api';
import { Button } from '../../components/utils/Button';
import { Link } from 'react-router-dom';

export const Authors = () => {
  const [ authors, setAuthors ] = useState([]);
  const authorExists = (value) => authors.findIndex(({ login }) => login === value) !== -1;
  const addAuthor = (value) => authorExists(value.login)
    ? authors
    : setAuthors([...authors, value]);

  useEffect(() => {
    fetched.then(({ articles }) => {
      articles.map(async x => {
        if (authorExists(x.author)) return;
        const user = await octo.users.getByUsername({
          username: x.author,
        });
        addAuthor(user.data);
      })
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <section className="py-16 mx-8">
    {authors && authors.length > 0 && (
      <div className="lg:w-2/3 lg:mx-auto">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          {authors.length} {pluralize(authors, 'auteur')} {pluralize(authors, 'trouvé')}
        </h1>
        <div className="space-y-8 my-8 lg:my-12">
          {authors.map((author, i) => <AuthorCard key={i} author={author} />)}
        </div>
      </div>
    )}
  </section>
};

const AuthorCard = ({ author }) => {
  const [ articles, setArticles ] = useState(0);
  useEffect(() => {
    let result = 0;
    fetched.then((x) => {
      for (const article of x.articles) {
        if (article.author === author.login) result++;
      }
      setArticles(result);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="shadow-lg lg:w-[26rem]">
    <div className="relative children:rounded-t-2xl">
      <img src={author.avatar_url} className="h-32 object-cover w-full" alt="" />
      <span className="absolute inset-0 h-full w-full backdrop-filter backdrop-blur-2xl bg-black bg-opacity-25" />
    </div>
    <div className="bg-gray-900 rounded-b-2xl">
      <div className="flex flex-row">
        <div className="bg-gray-900 p-1.5 w-24 h-24 relative -mt-12 ml-4 rounded-full">
          <img src={author.avatar_url} className="rounded-full shadow-lg" alt="" />
        </div>
        <div className="flex flex-auto p-4 justify-end">
          <Link to={`/authors/${author.login}`}>
            <Button coloured>
              Voir le profil
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-8 pt-0">
        <header>
          <h1 className="text-xl font-bold text-white tracking-wide">
            {author.name}
          </h1>
          <span className="-mt-1 block text-white opacity-70 font-light">
            @{author.login}
          </span>
        </header>
        <p className="mt-2 text-lg leading-5 text-white font-light italic opacity-90">
          {author.bio}
        </p>
      </div>
      <hr className="pb-8 opacity-25" />
      <ul className="px-8 pb-8 text-white">
        <li>
          <strong>{articles}</strong> {pluralize(articles, 'article')} {pluralize(articles, 'posté')}
        </li>
        <li>
          Travaille à <strong>{author.company}</strong>
        </li>
      </ul>
    </div>
  </div>
}

const pluralize = (element, string) => string + (typeof element === 'number' 
  ? element > 1 ? 's' : ''
  : element.length > 1 ? 's' : '');