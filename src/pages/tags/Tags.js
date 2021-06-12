import { createContext, useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { articles } from "../../utils/api"

const TagContext = createContext();

export const Tags = () => {
  const [ content, setContent ] = useState();
  useEffect(() => {
    articles.then(x => setContent(x));
  }, []);

  return <section className="xl:w-3/4 2xl:w-2/3 mx-auto lg:my-16">
    <h1 className="text-2xl font-bold text-white tracking-wide m-8">
      {content ? content.tags.length : 0} tags trouvés
    </h1>
    <div className="px-8 space-y-8 flex flex-col my-8 lg:flex-row lg:space-y-0 lg:gap-x-8 2xl:children:w-1/3 lg:children:w-1/2">
      {content && (
        <TagContext.Provider value={content.articles}>
          {content.tags.map((x, i) => <TagCard tag={x} key={i} />)}
        </TagContext.Provider>
      )}
    </div>
  </section>
}

export const TagCard = ({ tag }) => {
  const articles = useContext(TagContext);
  const [ count, setCount ] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setCount(articles.filter(x => x.tags.includes(tag.slug)).length), []);
  return <Link to={`/tags/${tag.slug}`}>
    <div className="relative h-32">
      <img src={tag.image} alt="" className="h-full w-full object-cover rounded-2xl shadow-lg" />
      <span className="absolute inset-0 h-full w-full bg-black bg-opacity-75 backdrop-blur-[2px] backdrop-filter rounded-2xl" />
      <div className="absolute bottom-1/2 left-0 transform translate-y-1/2 w-full px-8 text-white">
        <div className="flex flex-row">
          <h1 className="text-xl font-semibold">{tag.name}</h1>
          <p className="flex flex-auto justify-end">
            <strong>{count}</strong>
            <span className="ml-1 opacity-80">articles</span>
          </p>
        </div>
        <p className="w-3/4 opacity-70">{tag.description}</p>
      </div>
    </div>
  </Link>
}