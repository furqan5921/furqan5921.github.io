import React from "react";
import "./portfolio.css";
import dermstore from "../../assets/p1.png";
import Yoox from "../../assets/yoox.png";
import tripsvilla from "../../assets/tripsvilla.png";
import bontime from "../../assets/Bontime.png";
import fitfinity from "../../assets/fitfinity.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});
const data = [
  {
    id: 5,
    title: "Fitfinity",
    image: fitfinity,
    github: "https://github.com/furqan5921/Fitfinity",
    demo: "https://fitfinity.vercel.app/",
    stack: [

      "React",
      "ChakraUI",
      "MongoDB",
      "ExpressJS",
      "Redux",
    ],
    description: [
      "Fitfinity nutrition tracking app provides data of your health.",
    ],
  },
  {
    id: 4,
    image: bontime,
    title: "Bontime",
    github: "https://github.com/ajay329/frightened-snake-4355",
    demo: "https://bontime.vercel.app/",
    stack: ["HTML", "ChakraUI", "React", "MongoDB", "ExpressJS"],
    description: [
      "Bontime is a freelancing management app. It offers freelance proposals and contracts",
    ],
  },
  {
    id: 1,
    image: dermstore,
    title: "Dermstore App Clone",
    github: "https://github.com/TusharKadam7671/foregoing-tin-1857",
    demo: "https://dermstore-project-clone.netlify.app/",
    stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Heroku"],
    description: [
      "Dermstore is a skin care and beauty e-commerce site in the United States.",
    ],
  },
  {
    id: 2,
    image: Yoox,
    title: "Yoox App Clone",
    github: "https://github.com/furqan5921/-youthful-glass-8497",
    demo: "https://sayanyoox.netlify.app/",
    stack: ["HTML", "CSS", "Javascript", "React", "Chakra UI"],
    description: [
      "YOOX is the world’s leading online store for fashion, design and art that lasts a lifetime and beyond",
    ],
  },
  {
    id: 3,
    image: tripsvilla,
    title: "TripsVilla App Clone",
    github: "https://github.com/gitsid1611/uninterested-ocean-1026",
    demo: "https://inquisitive-mooncake-83e1c3.netlify.app/",
    stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Heroku"],
    description: [
      "TripsVilla is a one-stop portal to book Villa, Vacation Rental apartments, Holiday homes, and Homestays",
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Bucket</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, github, demo, stack, description }, i) => {
            return (
              <article className="portfolio__items" key={id}>
                <div className="portfolio__items-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>Tech Stack Used </h4>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {stack.map((el, index) => (
                    <div className="portfolio__tech" key={index}>
                      <small className="text-light">{el}</small>
                    </div>
                  ))}
                </div>
                <h4>Description</h4>
                <ul>
                  {description.map((el, index) => (
                    <li key={index}>
                      <small className="text-light">{el}</small>
                    </li>
                  ))}
                </ul>
                <div className="portfolio__item-cta">
                  <a target="_blank" href={github} className="btn">
                    Github
                  </a>
                  <a target="_blank" href={demo} className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
