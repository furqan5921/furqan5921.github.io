import React from "react";
import "./about.css";
import me from "../../assets/metwo.jpeg";

import {AiFillTag} from "react-icons/ai";
import {IoBookSharp} from "react-icons/io5";
import {SiBookstack} from "react-icons/si";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiFillTag className="about__icon" />
              <h5>Experience</h5>
              <small>Worked 2+ years as Business Development Executive</small>
            </article>
            <article className="about__card">
              <IoBookSharp className="about__icon" />
              <h5>Aspiring Full Stack Web Developer</h5>
              <small>Masai School (Remote)</small>
            </article>
            <article className="about__card">
              <SiBookstack className="about__icon" />
              <h5>Master of Business Administration</h5>
              <small>2016-18</small>
            </article>
            
          </div>
          <p>
            Detail-oriented Full Stack Web Developer with excellent technical
            skills, and proficiency in MERN stack. Extremely passionate about
            building appealing and dynamic products that provide great user
            experiences. Looking forward to creating a mark within a product
            based company based on the acquired skillset and passion for coding.
          </p>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
