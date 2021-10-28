import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatName } from '../../layouts/Projects';
import { articles as fetched, filterArticlesByTag } from '../../utils/api';
import { ArticleCard } from '../blog/Blog';

export const Tag = () => {
  const { slug } = useParams();
  const [ articles, setArticles ] = useState();
  const [ tag, setTag ] = useState({ 
    image: undefined,
    name: undefined,
  });

  useEffect(() => fetched.then((x) => {
    filterArticlesByTag(slug, x).then(y => setArticles(y));
    setTag(x.tags.find(y => y.slug === slug));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [slug]);
  return <div className="my-8"> 
    {articles && <>
      <div className="relative h-48 lg:h-64">
        <img src={(tag && tag.image) || 'https://i.stack.imgur.com/y9DpT.jpg'} alt="" className="h-full w-full object-cover" />
        <span className="absolute inset-0 h-full w-full bg-black bg-opacity-75 backdrop-blur-[2px] backdrop-filter" />
        <div className="absolute bottom-1/2 left-0 transform translate-y-1/2 w-full px-8 text-white lg:!left-1/2 lg:-translate-x-1/2 lg:w-2/3">
          <div className="flex flex-row justify-center">
            <h1 className="text-xl lg:text-3xl font-semibold">{(tag && tag.name) || slug.length === 2 ? slug.toUpperCase() : formatName(slug)}</h1>
            <p className="flex flex-auto lg:text-xl justify-end">
              <strong>{articles.length}</strong>
              <span className="ml-1 opacity-80">article{articles.length > 1 ? 's' : ''}</span>
            </p>
          </div>
          <p className="w-3/4 opacity-70 lg:text-xl">{(tag && tag.description) || 'Aucune description pour ce tag n\'a encore été entrée'}</p>
        </div>
      </div>
      <section className="m-8 lg:w-3/4 lg:mx-auto">
        <h1 className="text-2xl font-bold text-white tracking-wide mb-8">
          Articles publiés avec ce tag
        </h1>
        <div className="space-y-8 lg:space-y-0 lg:gap-8 flex flex-col lg:flex-row lg:children:w-[48%] lg:mx-0 flex-wrap">
          {articles.map((x, i) => <ArticleCard article={x} key={i} />)}
        </div>
      </section>
    </>}
  </div>
}