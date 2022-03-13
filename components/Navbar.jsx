import { IconBrandTwitter, IconBrandGithub } from '@tabler/icons';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return <nav className="container mx-auto p-8 md:px-0 md:pt-16 flex flex-col md:flex-row items-center 2xl:w-2/3">
    <div className="flex flex-initial flex-col md:flex-row items-center text-center md:text-left">
      <img className="w-20 h-20 object-cover rounded-full shadow-md" src="https://cdn.discordapp.com/attachments/768087687655194675/949965497301106729/66BB0FC6-BA56-46CF-83BD-1305865FEBB8.jpg" alt="" />
      <div className="flex flex-col md:ml-4 justify-center">
        <h1 className="font-black text-2xl text-black">
          thomas vergne
        </h1>
        <Link to="/" className="text-lg -mt-1 text-neutral-500 hover:underline underline-offset-1">
          Retourner à la page d'accueil
        </Link>
      </div>
    </div>
    <div className="flex flex-auto mt-8 md:mt-0 justify-end">
      <ul className="flex gap-x-8 children:text-5xl">
        <a href="https://github.com/thomasvergne" target="_blank">
          <IconBrandGithub size={30} />
        </a>
        <IconBrandTwitter size={30} />
      </ul>
    </div>
  </nav>;
}