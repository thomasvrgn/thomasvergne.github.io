import { Octokit } from '@octokit/rest';
import { fetchRouter } from './article';

export const { REACT_APP_API_TOKEN } = process.env;
export const octo = new Octokit({
  auth: REACT_APP_API_TOKEN,
});

export const articles = fetchRouter().then(x => { 
  x.articles.reverse();
  return x;
});
