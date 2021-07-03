import marked from 'marked';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Search } from '../../components/Search';
import { ArticleContext } from '../../context/ArticleContext';
import { articles as fetched } from '../../utils/api';
import { getArticle } from '../../utils/article';

export const Blog = () => {
  const [ articles, setArticles ] = useState([]);
  const [ areResults, setResultState ] = useState(false);
  useEffect(() => {
    fetched.then(x => {
      setArticles(x.articles);
      document.title = `Thomas Vergne - Blog`;
    });
  }, []);
  return <div className="lg:w-3/4 lg:mx-auto">
    <ArticleContext.Provider value={{ articles, setResultState }}>
      <Search />
    </ArticleContext.Provider>
    {!areResults && (
      <section className="mx-6 space-y-8 lg:space-y-0 lg:gap-8 flex flex-col lg:flex-row lg:children:w-[48%] lg:mx-0 flex-wrap">
        {articles && articles.map((x, i) => <ArticleCard article={x} key={i} />)}
      </section>
    )}
  </div>
}

function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) return true;
    node = node.parentNode;
  }
  return false;
}

export const ArticleCard = ({ article }) => {
  const history = useHistory();
  const author = useRef(null);
  const tags = useRef(null);
  const [ time, setTime ] = useState();

  useEffect(() => {
    getArticle(article.url).then(content => {
      const html = '<div>' + marked(content) + '</div>';
      const parsed = new DOMParser().parseFromString(html, 'text/xml');
      const text = [];

      parsed
        .querySelectorAll('*')
        .forEach(x => x.tagName !== 'parseerror' 
          ? text.push(x.textContent.split(' ')) 
          : null
        );

      const [ minutes, seconds ] = (text.flat().length / 200)
        .toString()
        .split('.')
        .map(Number);

      const seconds_ = Math.ceil((seconds > 1000 
        ? Math.ceil(Number('0.' + seconds)) 
        : seconds) * 0.06);

      return minutes === 0 && seconds_ > 0
        ? setTime(`${seconds_} seconde${seconds_ > 1 ? 's' : ''}`)
        : setTime(`${minutes} minute${minutes > 1 ? 's' : ''} et ${seconds_} secondes`);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    if (!isDescendant(author.current, e.target) && !isDescendant(tags.current, e.target))
      return history.push(`/blog/${article.slug}`)
  }

  return <div className="cursor-pointer group" onClick={handleClick}>
    <div className="relative h-64 lg:h-96">
      <img src={article.image || 'https://i.stack.imgur.com/y9DpT.jpg'} alt="" className="h-full w-full object-cover rounded-xl shadow-lg" />
      <span className="absolute inset-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-[2px] backdrop-filter rounded-xl group-hover:backdrop-blur-[8px] transition-all duration-200 group-hover:bg-opacity-[.55]" />
      <div className="absolute bottom-0 left-0 w-full my-3 px-3 lg:p-8 lg:my-0 text-white">
        <div className="flex flex-row items-center">
          <h1 className="text-xl font-semibold tracking-wide">{article.title}</h1>
          <span className="flex-auto flex justify-end font-medium opacity-40">{time}</span>
        </div>
        <p className="opacity-60 w-3/4">{article.description}</p>
      </div>
      <div className="absolute flex flex-row top-0 left-0 space-x-2 p-4 lg:p-8 max-w-[50%] xl:max-w-[60%] 2xl:max-w-[75%] overflow-x-hidden" ref={tags}>
        {article.tags.map((tag, i) => (
          <Link to={`/tags/${tag}`} key={i}>
            <span className="bg-emerald-300 bg-opacity-20 py-1 px-3 rounded-full text-white font-medium text-sm min-w-[3.5rem] text-center backdrop-filter backdrop-blur-md">
              {tag}
            </span>
          </Link>
        ))}
      </div>
      <Link to={`/authors/${article.author}`} ref={author} className="absolute top-0 right-0 p-3 lg:p-[1.85rem] flex flex-row items-center">
        <span className="text-white">{article.author}</span>
        <img src={`https://avatars.githubusercontent.com/${article.author}`} className="w-8 rounded-full ml-2 lg:ml-4" alt="" />
      </Link>
    </div>
  </div>
}
