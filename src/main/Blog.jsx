import { loadArticles } from 'api/blog';
import Button from 'components/Button';
import { HeadTitle, Paragraph, Title } from 'components/Typography';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [articles, setArticles] = useState(null);
  useEffect(async () => setArticles(await loadArticles()), []);
  
  return <section className="pt-16 px-8 sm:px-16 container xl:max-w-6xl mx-auto">
    <HeadTitle>
      mes articles
    </HeadTitle>
    <div className="gap-8 gap-y-16 sm:gap-y-8 mt-16 grid lg:grid-cols-2">
      {articles && articles.articles.slice(0, 2).map((x, i) => <Card {...x} key={i} />)}
    </div>
    {articles && articles.articles.length > 2 && <div className="pt-16 flex justify-center">
      <Link to="/blog" className="inline-block w-max">
        <Button>
          En découvrir davantage
        </Button>
      </Link>
    </div>}
  </section>;
}

export function Card({ date, description, title, slug, image }) {
  return <article id={slug} className="group">
    <img src={image} className="grayscale transition-all duration-500 group-hover:grayscale-0 w-full h-64 object-cover rounded-xl shadow" alt="" />
    <div className="py-6 min-h-[8rem]">
      <Title children={title} />
      <Paragraph children={description} />
    </div>
    <div className="flex flex-col md:flex-row">
      <Link to={`/blog/${slug}`}>
        <Button black>
          Lire l'article
        </Button>
      </Link>
      <span className="flex justify-center mb-2 md:mb-0 md:justify-end flex-auto items-center text-neutral-500 order-first md:order-last">
        Rédigé le <span className="font-medium ml-1 text-neutral-700">{new Date(date).toLocaleDateString()}</span>
      </span>
    </div>
  </article>;
}