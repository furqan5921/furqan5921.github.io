import React from "react";
import CTA from "./CTA";
import "./header.css";
import me from "../../assets/mydp.jpeg";
import HeaderSocials from "./HeaderSocials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Text } from "./Text";

AOS.init({
  duration: 1200,
});

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>

        
          <h1>Mohammad Furqan</h1>
        
        <Text />
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};
export default Header;
