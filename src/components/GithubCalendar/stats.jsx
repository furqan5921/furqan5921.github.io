import React from "react";
import "./stats.css";
const Stats = () => {
  return (
    <div className="container stats__container">
      <div className="container_card">
        <div>
          <a href="https://github.com/furqan5921">
            <img
              className="stats__img"
              src="https://github-readme-streak-stats.herokuapp.com?user=furqan5921"
              alt=""
            />
          </a>
        </div>
        <div>
        <a href="https://github.com/furqan5921">
          <img
            align="center"
            className="stats__img"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=furqan5921&show_icons=true&locale=en&layout=compact"
            alt=""
          />
        </a>
      </div>
      
      </div>
     
        <div>
          <a href="https://github.com/furqan5921">
            <img
              align="left"
              className="stats__img"
              src="https://github-readme-stats.vercel.app/api?username=furqan5921&show_icons=true&locale=en&theme=buefy&hide_border=true"
              alt=""
            />
          </a>
        </div>
    </div>
  );
};

export default Stats;
