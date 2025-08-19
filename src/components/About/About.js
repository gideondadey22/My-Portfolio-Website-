import React from 'react';
import meImg from "../images/mypicture.jpg";
import "./About.scss";

const skills = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Sass"];

const About = () => (
  <div id="about">
    <div className="aboutContainer">
      <div className="aboutLeft">
        <h1>ABOUT</h1>
        <h3>Software Developer & Designer</h3>
        <div className="lowerText">
          <p>
            Gideon Dadey is a Software Developer skilled in building high-quality websites.
            He is focused on user experience and ensures websites are well-built with both
            Frontend and Backend technologies. His goal is to deliver functional, modern,
            and visually appealing websites on time.
          </p>
          <div
            className="abtButton"
            onClick={() => window.open('https://www.linkedin.com/in/gideon-dadey-263128182/', '_blank')}
          >
            View LinkedIn
          </div>
        </div>
      </div>
      <div className="aboutRight">
        <img src={meImg} alt="Gideon Dadey" />
      </div>
    </div>

    <div className="skills">
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  </div>
);

export default About;
