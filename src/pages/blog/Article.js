import marked from 'marked';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticle } from '../../utils/article';
import '../../assets/article.css';
import { Link } from 'react-router-dom';
import { articles as fetched, octo } from '../../utils/api';
import Highlight from 'highlight.js';

let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
import(`highlight.js/styles/atom-one-${matched ? 'dark' : 'light'}.css`);

const formatTimestamp = timestamp => {
  const date = new Date(timestamp)

  return [date.toLocaleDateString(), date.toLocaleTimeString()];
}

export const Article = () => {
  const [ content, setContent ] = useState();
  const [ article, setArticle ] = useState();
  const [ user, setUser ] = useState();
  const { slug } = useParams();

  useEffect(() => {
    Highlight.highlightAll();
    fetched.then(articles => {
      const found = articles.articles.find(x => x.slug === slug);
      setArticle(found);
      document.title = `Thomas Vergne - ${found.title}`;
      octo.users
        .getByUsername({ username: found.author })
        .then(x => x.data)
        .then(usr => setUser(usr));

      getArticle(found.url).then(content => {
        setContent(marked(content));
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <section>
    {article && user && (<section className="lg:w-2/3 xl:w-1/2 lg:mx-auto">
      <Link to={`/authors/${article.author}`} className="flex flex-row m-6 lg:mx-0">
        <img src={`https://avatars.githubusercontent.com/${article.author}`} className="w-16 h-16 rounded-full shadow-lg" alt="" />
        <div className="flex justify-center flex-col text-gray-700 dark:text-white ml-4">
          <h1 className="text-xl font-medium leading-4">Thomas</h1>
          <span className="opacity-70">Posté le {formatTimestamp(article.date)[0] + ' à ' + formatTimestamp(article.date)[1]}</span>
        </div>
      </Link>
      <div id="article" className="mx-6 lg:m-0" dangerouslySetInnerHTML={{ __html: content }} />
    </section>)}
  </section>
};