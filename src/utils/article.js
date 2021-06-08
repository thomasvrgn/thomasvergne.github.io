import path from 'path';

export const fetchRouter = async () => {
  const res = await fetch('https://raw.githubusercontent.com/thomasvergne/portfolio-experiments/blog/routing.json');
  const json = await res.json();

  return json;
}

export const getArticle = async (url) => {
  const res = await fetch(path.join('https://raw.githubusercontent.com/thomasvergne/portfolio-experiments/blog/', url));
  const raw = await res.text();

  return raw;
}