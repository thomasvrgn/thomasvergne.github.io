import Button from 'components/Button';
import { exists, save } from 'api/blog';
import { HeadTitle, Paragraph, Title } from 'components/Typography';
import { useEffect, useState } from 'react';
import projects from 'assets/projects.json';

export default function Projects() {
  return <section className="p-16 px-8 sm:px-16 pt-0 container 2xl:w-2/3 mx-auto">
    <HeadTitle>
      mes travaux
    </HeadTitle>
    <div className="divide-y space-y-16 children:pt-16">
      {projects.map((x, i) => <Card key={i} project={x} />)}
    </div>
  </section>
}

function Card({ project }) {
  const { name, description, image, link, date, code } = project;
  const [example, setCode] = useState(null);

  useEffect(async () => {
    if (exists(code)) return setCode(window.localStorage.getItem(code));

    const fetcher = await fetch(code);
    const content = await fetcher.text();
    save(code, content); setCode(content);
  }, []);

  return <article>
    <div className="grid lg:grid-cols-6 gap-8">
      <div className="col-span-6 lg:col-span-1 flex items-center justify-center">
        <img src={image} className="w-24 h-24 rounded-lg shadow-md" alt="" />
      </div>
      <div className="col-span-6 lg:col-span-5 flex items-center justify-center">
        <div className="text-center lg:text-left">
          <Title>{name}</Title>
          <Paragraph>
            {description}
          </Paragraph>
        </div>
      </div>
      <div className="col-span-6 lg:col-span-5 lg:col-start-2">
        <code>
          <pre className="max-h-64 whitespace-pre-wrap overflow-auto bg-gray-50 p-4 rounded-xl border font-mono text-neutral-700">
            {example}
          </pre>  
        </code>
        <div className="flex gap-4 mt-4 flex-col md:flex-row justify-center lg:justify-start">
          <Button black onClick={() => window.open(link, '_blank')}>
            Explorer le projet
          </Button>
          <Button onClick={() => alert('Not implemented yet!')}>
            En savoir plus
          </Button>
        </div>  
      </div>
    </div>
  </article>;
}