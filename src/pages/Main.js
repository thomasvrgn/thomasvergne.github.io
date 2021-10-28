import { Presentation } from '../layouts/Presentation';
import { Skills } from '../layouts/Skills';
import { Features } from '../layouts/Features';
import { Projects } from '../layouts/Projects';
import { Contact } from '../layouts/Contact';
import { Experiences } from '../layouts/Experiences'; 

export const Home = () => {
  document.title = 'Thomas Vergne';
  return <div className="space-y-16 px-4 mt-8 lg:w-4/5 md:w-[90%] mx-auto">
    <Presentation />
    <Skills />
    <Features />
    <Experiences />
    <Projects />
    <Contact />
  </div>
}