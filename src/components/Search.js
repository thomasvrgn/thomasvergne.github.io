import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../context/ArticleContext";
import Fuse from 'fuse.js';
import { ArticleCard } from "../Blog";

const searchForArticle = (article, articles) => {
  const options = {
    includeScore: true,
    keys: ['title', 'author', 'description', 'slug'],
  };

  const fuse = new Fuse(articles, options);
  return fuse.search(article);
}

export const Search = () => {
  const { articles, setResultState } = useContext(ArticleContext);
  const [ input, setInput ] = useState('');
  const [ results, setResults ] = useState([]);
  useEffect(() => {
    if (input.length > 0) {
      setResults(searchForArticle(input, articles));
      if (results && results.length > 0) setResultState(true);
      else setResultState(false);
    } else {
      setResultState(false);
      setResults([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return <div className="px-8 my-8 lg:px-0">
    <input type="text" className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white py-2 px-4 w-full lg:w-96 rounded-xl focus:outline-none" onKeyDown={(e) => setInput(e.target.value)} placeholder="Rechercher un article..." />
    {articles && results && results.length > 0 && (
      <ul className="py-4 space-y-8 flex flex-col lg:space-y-0 lg:gap-x-8 lg:flex-row lg:children:w-1/2">
        {results.map(({ item }, i) => <ArticleCard key={i} article={item} />)}
      </ul>
    )}
  </div>
};