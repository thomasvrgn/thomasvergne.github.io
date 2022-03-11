import { loadArticles } from 'api/blog';
import Button from 'components/Button';
import { HeadTitle, Paragraph, Title } from 'components/Typography';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [articles, setArticles] = useState(null);
  useEffect(async () => setArticles(await loadArticles()), []);
  
  return <section className="p-16 container 2xl:w-2/3 mx-auto">
    <HeadTitle>
      mes articles
    </HeadTitle>
    <div className="gap-8 mt-16 flex flex-wrap children:w-full lg:children:w-[calc(50%-1rem)]">
      {articles && articles.articles.slice(0, 2).map((x, i) => <Card {...x} key={i} />)}
    </div>
    <div className="pt-16 children:mx-auto">
      <Button>
        En découvrir davantage
      </Button>
    </div>
  </section>;
}

function Card({ author, date, description, title, slug, image, url }) {
  return <article id={slug} className="group">
    <img src={image} className="grayscale transition-all duration-500 group-hover:grayscale-0 w-full h-64 object-cover rounded-xl shadow" alt="" />
    <div className="py-6">
      <Title children={title} />
      <Paragraph children={description} />
    </div>
    <div className="flex">
      <Button black>
        Lire l'article
      </Button>
      <span className="flex justify-end flex-auto items-center text-neutral-500">
        Rédigé le <span className="font-medium ml-1 text-neutral-700">{new Date(date).toLocaleDateString()}</span>
      </span>
    </div>
  </article>;
}