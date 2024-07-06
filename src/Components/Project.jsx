import { Heading } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
const data = [
  {
    title: "Evvent As",
    desc: "Worked as a part-time developer at a Norwegian-based company. Collaborated with Evvent As to design and implement database schemas and built dashboards.",
    techStack: "Nextjs | Prisma ORM | Shadcn | TailwindCss | TRPC",
    feature:
      "Collaborated with Evvent As to design and implement database schemas using Prisma, ensuring efficient data management and scalability. Built dynamic dashboards for data visualization using Shadcn, integrating with Prisma for data querying and management. Implemented responsive UI components with Tailwind CSS to enhance user experience.",
    img: "evvent.png",
    deploy: "https://evvent-marketplace-version1.vercel.app",
  },
  {
    title: "Snappy",
    desc: "Snappy a robust and scalable real-time chat application using Socket.io. Designed and implemented the application from concept to deployment, showcasing my proficiency in full-stack development and real-time communication protocols",
    techStack:
      "React | Socket.io | Axios | Nodejs | Expressjs | MongoDB | Styled-components",
    feature:
      " Multi-platform Support, User Authentication & Authorization, Select Avatars, Real Time Notifications, Real-Time Message Delivery, Emojis Support.",
    img: "snappy.png",
    clone: "https://github.com/furqan5921/snappy_app",
    deploy: "https://snappy-pied.vercel.app",
  },
  {
    title: "Fitfinity",
    desc: "Fitfinity nutrition tracking app provides data of your health.",
    techStack:
      "React | Redux | Axios | Nodejs | Expressjs | MongoDB | Chakra-UI",
    feature:
      " Dashboard, Login and Signup Authorization with otp During signup with nodemailer",
    img: "fitfinity.png",
    clone: "https://github.com/furqan5921/Fitfinity",
    deploy: "https://fitfinity.vercel.app/",
  },

  {
    title: "Bontime",
    desc: "  Bontime is a freelancing management app. It offers freelance proposals and contracts",
    techStack:
      "HTML  |  ChakraUI  |  JavaScript |  ReactJs  |  Nodejs  |  Express |  MongoDB ",
    feature: "Sign In, Sign Up, Create Invoices and Dynamic Pages",
    img: "Bontime.png",
    clone: "https://github.com/ajay329/frightened-snake-4355",

    deploy: "https://bontime.vercel.app/",
  },

  {
    title: "Yoox App Clone",
    desc: "YOOX is the world’s leading online store for fashion, design and art that lasts a lifetime and beyond",
    techStack: "HTML | CSS | Javascript | ReactJs | Chakra-UI",
    feature:
      "E-Commerce website for clothing addToCart functionality maintained cart checout pages",
    img: "yoox.png",
    clone: "https://github.com/furqan5921/-youthful-glass-8497",
    deploy: "https://sayanyoox.netlify.app/",
  },
  {
    title: "Dermstore App Clone",
    desc: "Dermstore is a skin care and beauty e-commerce site in the United States.",
    techStack: "HTML | CSS | Javascript | Bootstrap | Heroku ",
    feature:
      "E-Commerce website for Beauty-products addToCart functionality maintained cart checout pages",
    img: "p1.png",
    clone: "https://github.com/TusharKadam7671/foregoing-tin-1857",
    deploy: "https://dermstore-project-clone.netlify.app/",
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
