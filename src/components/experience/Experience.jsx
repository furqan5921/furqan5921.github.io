import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Learnings</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS3</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div>
             <h4>Javascript</h4>
              <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>ReactJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Redux</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Backend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Express</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
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
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>VS Code</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Postman</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
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

{
  /*  <h3>Frontend Development</h3>
<div className="experience__content">
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>HTML</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>CSS</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>Javascript</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>ReactJS</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>Redux</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>NodeJS</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>Express</h4>
    <small className="text-light">Experienced</small>
  </article>
  <article className="experience__details">
    <BsPatchCheckFill />
    <h4>MongoDB</h4>
    <small className="text-light">Experienced</small>
  </article>*/
}
