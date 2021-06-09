import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { Article } from './pages/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Author } from './pages/Author';
import { Home } from './pages/Main';

export const App = () => {
  return <main className="dark:bg-gray-800">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/author/:slug">
          <Author />
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