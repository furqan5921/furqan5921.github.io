import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import { Footer } from "./components/footer/Footer";
import Calendar from "./components/GithubCalendar/GithubCalendar";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";

const App = () => {
  return (
    <>
    
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Calendar />

      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
