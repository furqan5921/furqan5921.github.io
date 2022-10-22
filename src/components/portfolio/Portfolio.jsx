import React from "react";
import "./portfolio.css";
import dermstore from "../../assets/p1.png";
const data = [
  {
    id:1,
    image:dermstore,
    title:"Dermstore App Clone",
    github:"https://github.com/TusharKadam7671/foregoing-tin-1857",
    demo:"https://dermstore-project-clone.netlify.app/",
    stack:["HTML","CSS","Javascript"]
  },
  {
    id:2,
    image:dermstore,
    title:"Yoox App Clone",
    github:"https://github.com/TusharKadam7671/foregoing-tin-1857",
    demo:"https://sayanyoox.netlify.app/",
    stack:["HTML","CSS","Javascript","React","Vite JS"]
  },
  {
    id:3,
    image:dermstore,
    title:"Dermstore App Clone",
    github:"https://github.com/TusharKadam7671/foregoing-tin-1857",
    demo:"https://dermstore-project-clone.netlify.app/",
    stack:["HTML","CSS","Javascript"]
  }
  
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Bucket</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {data.map(({id,image,title,github,demo,stack})=>{
        return(
          <article className="portfolio__items" key={id}>
          <div className="portfolio__items-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h4>Tech Stack Used </h4>
          {stack.map((el,index) => <div className="portfolio__tech" key={index}>
            
            <small >{el}</small>
            </div>)}
          <div className="portfolio__item-cta">
            <a
              target="_blank"
              href={github}
              className="btn"
            >
              Github
            </a>
            <a
              target="_blank"
              href={demo}
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        )
       })}
      </div>
    </section>
  );
};

export default Portfolio;
