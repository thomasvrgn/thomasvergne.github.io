import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
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
import { Error } from './pages/Error';
import { Login, supabase } from './pages/Login';
import { useState } from 'react';
import { Dashboard } from './pages/dashboard/Dashboard';

export const App = () => {
  const [session, setSession] = useState(null);
  supabase.auth.onAuthStateChange((e, s) => e === 'SIGNED_IN'
    ? setSession(s)
    : null);
  return <main className="dark:bg-gray-800">
    <Router>
      <Navbar session={session} />
      <Switch>
        <Route path="/dashboard">
          <Dashboard session={session} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </main>
}