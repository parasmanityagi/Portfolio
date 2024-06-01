import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    title : "Linkedin",
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pmtyagi/",
    src: "/linkedin.png",
  },
  {
    title : "Github",
    name: "github",
    href: "https://github.com/parasmanityagi",
    src: "/github.png",
  }
];

export const Projects = [
  {
    id:1,
    title: "EzBuy - Flipkart Clone",
    text: `Developed EzBuy using the MERN stack, Redux, and Material-UI. Created an intuitive UI with ReactJS
    and Material-UI, ensured robust backend performance with NodeJS and Express.js, and implemented
    secure user authentication. Managed data efficiently with MongoDB, offering a seamless shopping
    experience with a vast product range`,
    link: "https://regal-tiramisu-47f0fa.netlify.app/",
    src: "/EzBuy.png",
  },
  {
    id:2,
    title: "MovieWave - Netflix Clone",
    text: `MovieWave - Netflix CloneDeveloped MovieWave, a Netflix-like streaming platform using the MERN
    stack, Redux Toolkit, and TMDb API. Features include a smooth ReactJS interface, robust
    NodeJS/Express.js backend, secure Firebase authentication, and MongoDB data storage. Offers a vast library of shows and movies for a great viewing experience.`,
    link: "https://comforting-entremet-7e948d.netlify.app/",
    src: "/MovieWave.png",
  },
  {
    id:3,
    title: "Modern Nextjs Portfolio",
    text: `Crafted a personalized portfolio using Next.js and Framer Motion for dynamic animations. Next.js
    provides a seamless development experience, while Framer Motion enhances user engagement with
    fluid animations. The result is an interactive showcase of projects and skills, designed to leave a
    lasting impression.`,
    link: "/",
    src: "/Portfolio.png",
  }
];

export const NavLinks = [
  {
    title: "Home",
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    title: "My Skills",
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    title: "My Project",
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    title: "Contact Me",
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];