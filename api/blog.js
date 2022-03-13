import { useEffect, useState } from 'react';

export const ARTICLE_URL = 'https://raw.githubusercontent.com/thomasvergne/thomasvergne.github.io/blog/articles/';
export const ARTICLE_EXT = '.md';

const URL = `https://raw.githubusercontent.com/thomasvergne/portfolio-experiments/blog/routing.json`;

export const save = (name, code) => window.localStorage.setItem(name, code);
export const exists = name => get(name) !== null;
export const get = name => window.localStorage.getItem(name);

export const loadArticles = async () => {
  if (exists('articles')) return JSON.parse(get('articles'));
  
  const response = await fetch(URL);
  const json = await response.json();
  save('articles', JSON.stringify(json));
  return json;
}

export function useBlog(fn = x => x) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const json = await loadArticles();
    setArticles(await fn(json));
    setLoading(false);
  }, []);

  return { articles, loading };
}
