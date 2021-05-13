import { Navbar } from './components/Navbar';
import { Presentation } from './components/Presentation';
import { Skills } from './components/Skills';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export const App = () => {
  return <main className="dark:bg-gray-800">
    <Navbar />
    <div className="space-y-16 px-4 mt-8">
      <Presentation />
      <Skills />
      <Features />
      <Projects />
      <Contact />
    </div>
  </main>
}