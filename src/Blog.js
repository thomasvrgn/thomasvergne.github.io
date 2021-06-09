import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './components/Search';
import { ArticleContext } from './context/ArticleContext';
import { fetchRouter } from './utils/article';

export const Blog = () => {
  const [ articles, setArticles ] = useState([]);
  const [ areResults, setResultState ] = useState(false);
  useEffect(() => {
    fetchRouter().then(x => setArticles(x.articles));
  }, []);
  return <div className="lg:w-3/4 lg:mx-auto">
    <ArticleContext.Provider value={{ articles, setResultState }}>
      <Search />
    </ArticleContext.Provider>
    {!areResults && (
      <section className="mx-6 space-y-8 lg:space-y-0 lg:gap-x-8 flex flex-col lg:flex-row lg:children:w-1/2 lg:mx-0">
        {articles && articles.map((x, i) => <ArticleCard article={x} key={i} />)}
      </section>
    )}
  </div>
}

export const ArticleCard = ({ article }) => {
  return <Link to={`/blog/${article.slug}`}>
    <div className="relative h-64 shadow-lg">
      <img src={article.image} alt="" className="h-full w-full object-cover rounded-xl" />
      <span className="absolute inset-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-[2px] backdrop-filter rounded-xl hover:backdrop-blur-[8px] transition-all duration-200 hover:bg-opacity-[.55]" />
      <div className="absolute bottom-0 left-0 w-full my-3 px-3 text-white">
        <h1 className="text-xl font-semibold tracking-wide">{article.title}</h1>
        <p className="opacity-60 w-3/4">{article.description}</p>
      </div>
      <div className="absolute flex flex-row top-0 left-0 space-x-2 px-4 py-4">
        {article.tags.map((tag, i) => (
          <span className="bg-emerald-300 bg-opacity-20 py-1 px-3 rounded-full text-white font-medium text-sm min-w-[3.5rem] text-center backdrop-filter backdrop-blur-md" key={i}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
}