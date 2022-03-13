import { useBlog } from 'api/blog';
import Navigation from 'components/Navbar';
import { HeadTitle } from 'components/Typography';
import { Card } from 'src/main/Blog';

export default function List() {
  const { loading, articles } = useBlog(x => x.articles);
  return <>
    <Navigation />
    <section id="blog-list" className="container 2xl:w-2/3 mx-auto pt-32">
      <HeadTitle>
        mes articles
      </HeadTitle>
      <div className="flex flex-wrap gap-8 children:w-[calc(50%-1rem)] mt-8">
        {!loading && articles && articles.map((x, i) => <Card key={i} {...x} />)}
      </div>
    </section>
  </>;
}