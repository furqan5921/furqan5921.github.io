import React from "react";
import "./portfolio.css";
import dermstore from "../../assets/p1.png";
import Yoox from "../../assets/yoox.png";
import tripsvilla from "../../assets/tripsvilla.png"
const data = [
  {
    id:1,
    image:dermstore,
    title:"Dermstore App Clone",
    github:"https://github.com/TusharKadam7671/foregoing-tin-1857",
    demo:"https://dermstore-project-clone.netlify.app/",
    stack:["HTML","CSS","Javascript","Bootstrap","Heroku"],
    description:["Login/Signup page with working properly","Product page show appending data","Add Product in cart page successfully","Checkout page and payment done successfully"]
  },
  {
    id:2,
    image:Yoox,
    title:"Yoox App Clone",
    github:"https://github.com/furqan5921/-youthful-glass-8497",
    demo:"https://sayanyoox.netlify.app/",
    stack:["HTML","CSS","Javascript","React","Chakra UI"],
    description:["Login/Signup page with working properly","Append data at heroku","Add product to cart page successfully","Checkout page and payment done successfully"]

  },
  {
    id:3,
    image:tripsvilla,
    title:"TripsVilla App Clone",
    github:"https://github.com/TusharKadam7671/foregoing-tin-1857",
    demo:"https://github.com/gitsid1611/uninterested-ocean-1026",
    stack:["HTML","CSS","Javascript","Bootstrap","Heroku"],
    description:["Login/Signup page with working properly","Hotel page show appending data","Add hotel in cart page successfully","Checkout page and payment done successfully"]

  }
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Bucket</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {data.map(({id,image,title,github,demo,stack,description})=>{
        return(
          <article className="portfolio__items" key={id}>
          <div className="portfolio__items-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h4>Tech Stack Used </h4>
          <div style={{
            display:"flex",
            gap:"0.5rem"
          }}>
          {stack.map((el,index) => <div className="portfolio__tech" key={index}>
            
            <small className="text-light" >{el}</small>
            </div>)}
            </div>
            <h4>Description</h4>
            <ul>
              {description.map((el,index)=> <li key={index}>
              <small className="text-light">
              {el}
                </small>
              </li>)}
            </ul>
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
