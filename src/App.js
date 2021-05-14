import { Navbar } from './components/Navbar';
import { Presentation } from './components/Presentation';
import { Skills } from './components/Skills';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  return <main className="dark:bg-gray-800">
    <Navbar />
    <div>
      <div className="space-y-16 px-4 mt-8 lg:w-4/5 md:w-[90%] mx-auto">
        <Presentation />
        <Skills />
        <Features />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  </main>
}