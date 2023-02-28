import { Heading } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";

const data = [
  {
    title: "Fitfinity",
    desc: "Fitfinity nutrition tracking app provides data of your health.",
    techStack:
      "React | Redux | Axios | Nodejs | Expressjs | MongoDB | Chakra-UI",
    feature:
      " Fully E-Commerce website with lots of feature Sign up, Sign In, Sign Out, Navbar with Drop-down Menu,  All the static Page, product page",
    img: "fitfinity.png",
    clone: "https://github.com/furqan5921/Fitfinity",
    deploy: "https://fitfinity.vercel.app/",
  },

  {
    title: "Bontime",
    desc: "  Bontime is a freelancing management app. It offers freelance proposals and contracts",
    techStack:
      "HTML  |  ChakraUI  |  JavaScript |  ReactJs  |  Nodejs  |  Express |  MongoDB ",
    feature: "Sign In, Sign Up and Dynamic Pages",
    img: "Bontime.png",
    clone: "https://github.com/ajay329/frightened-snake-4355",

    deploy: "https://bontime.vercel.app/",
  },

  {
    title: "Yoox App Clone",
    desc: "YOOX is the world’s leading online store for fashion, design and art that lasts a lifetime and beyond",
    techStack: "HTML | CSS | Javascript | ReactJs | Chakra-UI",
    feature:
      " E-Commerce website for food ordering, Sign In, Sign Out, Navbar with Drop-down Menu, Static Page, Button and Payment Page",
    img: "yoox.png",
    clone: "https://github.com/furqan5921/-youthful-glass-8497",

    deploy: "https://sayanyoox.netlify.app/",
  },
  {
    title: "Dermstore App Clone",

    desc: "This is a clone of Apple TV. Website was built with all features.",

    techStack: "HTML | CSS | Javascript | Bootstrap | Heroku ",
    feature:
      " Dermstore is a skin care and beauty e-commerce site in the United States.",
    img: "p1.png",
    clone: "https://github.com/TusharKadam7671/foregoing-tin-1857",
    deploy: "https://dermstore-project-clone.netlify.app/",
  },
  {
    title: "TripsVilla App Clone",
    desc: "TripsVilla is a one-stop portal to book Villa, Vacation Rental apartments, Holiday homes, and Homestays",
    techStack: "HTML | CSS | Javascript | VanillaJs",
    feature:
      "Sign up, Sign In, Sign Out, Navbar with Drop-down Menu, Dynamic Page, Button and Payment Page",
    img: "tripsvilla.png",
    clone: "https://github.com/gitsid1611/uninterested-ocean-1026",
    deploy: "https://inquisitive-mooncake-83e1c3.netlify.app/",
  },
];

export function Project() {
  return (
    <>
      <Heading mb="50px">MY PROJECTS</Heading>
      {data.map((el, i) => {
        return <ProjectCard key={i} data={{ ...el }} />;
      })}
    </>
  );
}
