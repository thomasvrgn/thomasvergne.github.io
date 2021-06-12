import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articles as fetched } from '../../utils/api';
import { ArticleCard } from '../blog/Blog';

export const Tag = () => {
  const { slug } = useParams();
  const [ articles, setArticles ] = useState();
  const [ tag, setTag ] = useState();

  useEffect(() => fetched.then((x) => {
    setArticles(x.articles.filter(y => y.tags.includes(slug)));
    setTag(x.tags.find(y => y.slug === slug));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [slug]);
  return <div className="my-8"> 
    {articles && tag && <>
      <div className="relative h-48 lg:h-64">
        <img src={tag.image} alt="" className="h-full w-full object-cover" />
        <span className="absolute inset-0 h-full w-full bg-black bg-opacity-75 backdrop-blur-[2px] backdrop-filter" />
        <div className="absolute bottom-1/2 left-0 transform translate-y-1/2 w-full px-8 text-white lg:!left-1/2 lg:-translate-x-1/2 lg:w-2/3">
          <div className="flex flex-row justify-center">
            <h1 className="text-xl lg:text-3xl font-semibold">{tag.name}</h1>
            <p className="flex flex-auto lg:text-xl justify-end">
              <strong>{articles.length}</strong>
              <span className="ml-1 opacity-80">article{articles.length > 1 ? 's' : ''}</span>
            </p>
          </div>
          <p className="w-3/4 opacity-70 lg:text-xl">{tag.description}</p>
        </div>
      </div>
      <section className="m-8 xl:w-2/3 xl:mx-auto">
        <h1 className="text-2xl font-bold text-white tracking-wide mb-8">
          Articles publiés avec ce tag
        </h1>
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:gap-x-8 lg:flex-row lg:children:w-1/2">
          {articles.map((x, i) => <ArticleCard article={x} key={i} />)}
        </div>
      </section>
    </>}
  </div>
}