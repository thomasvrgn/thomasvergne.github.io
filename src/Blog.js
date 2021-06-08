import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRouter } from './utils/article';

export const Blog = () => {
  const [ articles, setArticles ] = useState([]);
  useEffect(() => {
    fetchRouter().then(x => setArticles(x.articles));
  }, []);
  return <section className="mx-6">
    {articles && articles.map((x, i) => (
      <Link to={`/blog/${x.slug}`}>
        <div key={i} className="relative h-64 shadow-lg">
          <img src={x.image} alt="" className="h-full w-full object-cover rounded-xl" />
          <span className="absolute inset-0 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter rounded-xl hover:backdrop-blur-[8px] transition-all duration-200 hover:bg-opacity-[.55]" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 my-3 px-3 text-white">
            <h1 className="text-xl font-semibold tracking-wide">{x.title}</h1>
            <p className="opacity-60 w-3/4">{x.description}</p>
          </div>
          <div className="absolute flex flex-row top-0 left-0 space-x-2 px-4 py-4">
            {x.tags.map(tag => (
              <span class="bg-emerald-300 bg-opacity-20 py-1 px-3 rounded-full text-white font-medium text-sm min-w-[3.5rem] text-center backdrop-filter backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    ))}
  </section>
}