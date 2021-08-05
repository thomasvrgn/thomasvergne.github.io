import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

export const experiences = [
  {
    name: 'Maeli Assurances',
    role: 'Webmaster',
    description: `Réalisation entière du site de la companie en courtage d'assurance Maeli assurances avec des technologies modernes et très évolutives.`,
    image: 'https://cdn.discordapp.com/attachments/768087687655194675/872822979187343390/unknown.png',
    language: 'Svelte',
    urls: [
      {
        title: 'Site web',
        url: 'https://maeliassurances.fr',
        icon: faGlobeEurope,
      }
    ]
  },
  {
    name: 'Paladium',
    role: 'Intégrateur web',
    description: `J'ai été missionné avec l'aide de <a href="https://github.com/FaustinM">Faustin</a> afin de nous occuper de la refonte du site du serveur Minecraft français Paladium.`,
    image: 'https://cdn.discordapp.com/attachments/768087687655194675/872816092630892614/unknown.png',
    language: 'Vue',
    urls: [
      {
        title: 'Site web',
        url: 'https://paladium-pvp.fr',
        icon: faGlobeEurope,
      },
      {
        title: 'Discord',
        url: 'https://discord.gg/paladium',
        icon: faDiscord,
      }
    ]
  },
  {
    name: 'Palamazon',
    role: 'Lead développeur Front-End',
    description: `Conception de la première version du site ainsi qu'apport d'aide et gestion du projet de refonte du site internet.`,
    image: 'https://cdn.discordapp.com/attachments/768087687655194675/872827529059254312/unknown.png',
    language: 'Vue',
    urls: [
      {
        title: 'Site web',
        url: 'https://palamazon.fr',
        icon: faGlobeEurope,
      },
      {
        title: 'Discord',
        url: 'https://discord.gg/palamazon',
        icon: faDiscord,
      },
      {
        title: 'Github',
        url: 'https://github.com/PalamazonOff/palamazon-front',
        icon: faGithub,
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/palamazon',
        icon: faTwitter,
      }
    ]
  },
]