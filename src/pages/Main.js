import { Presentation } from '../components/Presentation';
import { Skills } from '../components/Skills';
import { Features } from '../components/Features';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Experiences } from '../components/Experiences'; 

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