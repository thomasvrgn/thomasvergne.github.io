import { ARTICLE_EXT, ARTICLE_URL, useBlog } from 'api/blog';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navigation from 'components/Navbar';

function getDuration(article) {
  const formatted = article
    .replace(/\s+/g, '')
    .replace(/```.*?```/g, '')
    .replace(/\#\*/g, '').trim();

  const wpm = 300 / 60;
  const time = formatted.length / wpm;

  const minutes = (~~(time / 60) + '').padStart(2, '0');
  const seconds = (~~((time / 60) % 1 * 60) + '').padStart(2, '0');
  return `${minutes} ${minutes > 0 ? 'minutes' : 'minute'} et ${seconds} ${seconds > 0 ? 'secondes' : 'seconde'}`
}

export default function Article() {
  const { slug } = useParams();
  const { loading, articles } = useBlog(async function({ articles }) {
    const article = articles.find(article => article.slug === slug);
    const content = await (await fetch(ARTICLE_URL + article.slug + ARTICLE_EXT)).text();
    document.title = `Thomas Vergne - ${article.title}`;
    return { ...article, content };
  });

  return <>
    <Navigation />
    {!loading && articles && <section id="article-page" className="container 2xl:w-2/3 mx-auto pt-16 md:pt-32">
      <img src={articles.image} className="h-64 w-full object-cover md:rounded-xl" alt="" />
      <div className="flex flex-col md:flex-row items-center my-8 px-8 md:px-0">
        <div className="flex-auto text-center md:text-left flex flex-col mt-4 md:mt-0">
          <span className="italic text-neutral-500">{getDuration(articles.content)} de lecture</span>
          <h1 className="font-black text-3xl text-black">
            {articles.title}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center order-first md:order-last items-center md:justify-end">
          <div className="md:mr-4 text-center md:text-right">
            <p className="text-lg text-neutral-500 leading-5">
              {articles.author}<br />
              Rédigé le <span className="text-neutral-700 font-medium">{new Date(articles.date).toLocaleDateString()}</span>
            </p>
          </div>
          <img src={`https://github.com/${articles.author}.png`} className="w-16 rounded-full h-16 shadow order-first md:order-last mb-4 md:mb-0" alt="" />
        </div>
      </div>
      <div id="article" className="px-8 md:px-0">
        <ReactMarkdown children={articles.content} />
      </div>
    </section>}
  </>;
}