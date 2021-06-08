import marked from 'marked';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchRouter, getArticle } from './utils/article';
import './assets/article.css';

export const Article = () => {
  const [ content, setContent ] = useState();
  const { slug } = useParams();
  useEffect(() => {
    fetchRouter().then(articles => {
      const found = articles.articles.find(x => x.slug === slug);
      getArticle(found.url).then(content => setContent(marked(content)));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <div id="article" className="mx-6" dangerouslySetInnerHTML={{ __html: content }} />
};