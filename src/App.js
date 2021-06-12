import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './pages/Main';

import { Blog } from './pages/blog/Blog';
import { Article } from './pages/blog/Article';

import { Tags } from './pages/tags/Tags';
import { Tag } from './pages/tags/Tag';

import { Author } from './pages/author/Author';
import { Authors } from './pages/author/Authors';

export const App = () => {
  return <main className="dark:bg-gray-800">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/tags/:slug">
          <Tag />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/authors/:slug">
          <Author />
        </Route>
        <Route path="/authors">
          <Authors />
        </Route>
        <Route path="/blog/:slug">
          <Article />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </main>
}