import { Presentation } from '../components/Presentation';
import { Skills } from '../components/Skills';
import { Features } from '../components/Features';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Home = () => (
  <div className="space-y-16 px-4 mt-8 lg:w-4/5 md:w-[90%] mx-auto">
    <Presentation />
    <Skills />
    <Features />
    <Projects />
    <Contact />
  </div>
)