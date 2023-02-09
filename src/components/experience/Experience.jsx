import React from "react";
import "./experience.css";
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt,FaAws,FaGithubSquare} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {SiReact,SiRedux,SiExpress,SiMongodb,SiVisualstudio,SiPostman} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"


import {IoLogoNodejs} from "react-icons/io"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200
});

const Experience = () => {
  return (
    <section id="experience" data-aos="slide-up">
      <h5>What Skills I have</h5>
      <h2>My Learnings</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
              <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
              <h4>CSS3</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
             <div>
             <h4>Javascript</h4>
              <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
              <h4>ReactJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
              <h4>Redux</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div>
              <h4>NextJs</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Backend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
              <h4>Express</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaAws className="experience__details-icon" />
              <div>
              <h4>AWS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
        <div className="tools">
        <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiVisualstudio className="experience__details-icon" />
              <div>
              <h4>VS Code</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostman className="experience__details-icon" />
              <div>
              <h4>Postman</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGithubSquare className="experience__details-icon" />
              <div>
              <h4>Github</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

