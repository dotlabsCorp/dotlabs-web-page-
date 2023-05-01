import { StaticImageData } from "next/image";

interface Link {
  text: string;
  url: string;
}

export interface Workshop {
  title: string;
  speakers: string[];
  imgUrl: StaticImageData | string | undefined;
  description: string;
  date: Link;
  tags: string[];
  location: Link;
}

export const workshops: Workshop[] = [
  {
    title: "De mortal a Dios con Rust I: Fundamentos.",
    speakers: ["Carlos Rodriguez"],
    imgUrl: undefined,
    description:
      "Aprende los fundamentos y las particularidades del lenguajes de programación Rust. Uno de los lenguajes más amados en la industria.",
    date: {
      text: "05/6/2023",
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230406T190000Z%2F20230406T220000Z&details=Aprende%20los%20fundamentos%20y%20las%20particularidades%20del%20lenguajes%20de%20programaci%C3%B3n%20Rust.%20Uno%20de%20los%20lenguajes%20m%C3%A1s%20amados%20en%20la%20industria.&location=Globant%2C%20One%20Plaza&text=De%20mortal%20a%20Dios%20con%20Rust%20I%3A%20Fundamentos.",
    },
    tags: ["Blockchain", "Rust", "Smart Contracts", "CLI"],
    location: {
      text: "Globant, One Plaza.",
      url: "https://goo.gl/maps/5LiYA1zuj5Xz7WrU8",
    },
  },
  {
    title: "De mortal a Dios con Rust II: Astar Network.",
    speakers: ["Carlos Rodriguez"],
    imgUrl: undefined,
    description:
      "Conoce la parachain más popular del ecosistema de Polkadot. Crea tus primeros Smart Contracts en Astar Network y diseña tu primer proyecto.",
    date: {
      text: "05/13/2023",
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230413T190000Z%2F20230413T220000Z&details=Conoce%20la%20parachain%20m%C3%A1s%20popular%20del%20ecosistema%20de%20Polkadot.%20Crea%20tus%20primeros%20Smart%20Contracts%20en%20Astar%20Network%20y%20dise%C3%B1a%20tu%20primer%20proyecto.&location=Hash%20House%2C%20Medellin&text=De%20mortal%20a%20Dios%20con%20Rust%20II%3A%20Astar%20Network.",
    },
    tags: [
      "Blockchain",
      "Rust",
      "Smart Contracts",
      "Astar",
      "Polkadot",
      "Substrate",
    ],
    location: {
      text: "Hash House",
      url: "https://goo.gl/maps/pBg3aBvVaspTwY9R6",
    },
  },
  {
    title: "De mortal a Dios con Rust III: Astar Network.",
    speakers: ["Carlos Rodriguez"],
    imgUrl: undefined,
    description:
      "Para finalizar con esta sega crea una DApp de tokenizacion en Astar Network. Tokeniza cualquier activo digital y compartelo.",
    date: {
      text: "05/20/2023",
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230420T190000Z%2F20230420T220000Z&details=Para%20finalizar%20con%20esta%20sega%20crea%20una%20DApp%20de%20tokenizacion%20en%20Astar%20Network.%20Tokeniza%20cualquier%20activo%20digital%20y%20compartelo.&location=Globant%2C%20One%20Plaza&text=De%20mortal%20a%20Dios%20con%20Rust%20III%3A%20Astar%20Network.",
    },
    tags: [
      "Blockchain",
      "Rust",
      "Smart Contracts",
      "Astar",
      "Polkadot",
      "Substrate",
    ],
    location: {
      text: "Globant, One Plaza.",
      url: "https://goo.gl/maps/5LiYA1zuj5Xz7WrU8",
    },
  },
];
