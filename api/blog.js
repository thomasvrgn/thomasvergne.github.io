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