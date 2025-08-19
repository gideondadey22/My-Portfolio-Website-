import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socialIcons">
       <li onClick={() => (window.location = "https://github.com/gideondadey22")}><AiFillGithub /></li>
       <li onClick={() => (window.location = "https://www.linkedin.com/in/gideon-dadey-263128182/")}><AiFillLinkedin /></li>
       <li onClick={() => (window.location = "https://twitter.com/cannymirah")}><GrTwitter /></li>
    </div>
  )
}

export default Socials