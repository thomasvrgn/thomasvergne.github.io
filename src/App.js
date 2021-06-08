import { Navbar } from './components/Navbar';
import { Presentation } from './components/Presentation';
import { Skills } from './components/Skills';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Blog } from './Blog';
import { Article } from './Article';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export const App = () => {
  return <main className="dark:bg-gray-800">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/blog/:slug">
          <Article />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <div className="space-y-16 px-4 mt-8 lg:w-4/5 md:w-[90%] mx-auto">
            <Presentation />
            <Skills />
            <Features />
            <Projects />
            <Contact />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  </main>
}