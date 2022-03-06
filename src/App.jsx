import { ArrowRight } from 'css.gg';
import Button from '../components/Button';

export default function App() {
  return <header className="relative min-h-screen overflow-hidden flex items-center justify-center">
    {/* Grid effect */}
    <div className="absolute w-full h-full grid-effect opacity-70"></div>
    {/* Bottom blur effect */}
    <div className="absolute -bottom-1/3 w-full h-3/5 bg-white filter blur-[7rem]"></div>

    {/* Centered header container */}
    <div className="text-center z-10 children:bg-white">
      <img className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md" src="https://cdn.discordapp.com/attachments/768087687655194675/949965497301106729/66BB0FC6-BA56-46CF-83BD-1305865FEBB8.jpg" alt="" />

      <h1 className="font-black text-6xl text-black">
        thomas vergne
      </h1>
      <p className="text-xl pt-2 pb-10 px-8 text-black text-opacity-60">
        Concepteur et développeur de langages de programmation
      </p>
      <Button withIcon={ArrowRight}>
        Découvrir mes travaux
      </Button>
    </div>
  </header>
}