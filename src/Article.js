import marked from 'marked';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchRouter, getArticle } from './utils/article';
import './assets/article.css';

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
    fetchRouter().then(articles => {
      const found = articles.articles.find(x => x.slug === slug);
      setArticle(found);
      fetch(`https://api.github.com/users/${found.author}`).then(x => x.json().then(usr => setUser(usr)));
      getArticle(found.url).then(content => setContent(marked(content)));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <section>
    {article && user && (<>
      <div className="flex flex-row m-6">
        <img src={`https://avatars.githubusercontent.com/${article.author}`} className="w-16 h-16 rounded-full shadow-lg" alt="" />
        <div className="flex justify-center flex-col text-white ml-4">
          <h1 className="text-xl font-medium leading-4">Thomas</h1>
          <span className="opacity-70">Posté le {formatTimestamp(article.date)[0] + ' à ' + formatTimestamp(article.date)[1]}</span>
        </div>
      </div>
      <div id="article" className="mx-6" dangerouslySetInnerHTML={{ __html: content }} />
    </>)}
  </section>
};