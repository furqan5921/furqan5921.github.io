import React from "react";
import "./about.css";

import me from "../../assets/dpimg.jpeg";
import { AiFillTag } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});
const About = () => {
  return (
    <section id="about" data-aos="fade-left">
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
              <h5>Full Stack Web Developer</h5>
              <small>Masai School (Remote)</small>
            </article>
            <article className="about__card">
              <SiBookstack className="about__icon" />
              <h5>Master of Business Administration</h5>
              <small>2016-18</small>
            </article>
          </div>

          <p>
            As a recent career switcher, I bring a unique combination of skills
            to the field of web development. After working as a business
            development executive, I realized that my true passion lies in the
            world of technology. I made the decision to switch to the IT sector
            and enrolled in the MERN stack program at Masai School. This program
            provided me with hands-on experience in MongoDB, Express.js,
            React.js, and Node.js. I am now a Full-stack web developer with a
            strong understanding of both front-end and back-end development. My
            background in business development has also given me a unique
            perspective on creating user-friendly and efficient web applications
            that meet the needs of both customers and businesses. I am excited
            to bring my diverse skill set and passion for technology to a new
            role and continue learning and growing in the field.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
