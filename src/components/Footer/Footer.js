import React from 'react';
import SocialsBtm from '../SocialsBtm/SocialsBtm';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footContainer">
       <div className="ftIcns"><SocialsBtm /></div>
       <div className="ftContact">
            <h2>Contact Me</h2>
            <p onClick={() => (window.location = "mailto:gideondadey@gmail.com")}>gideondadey@gmail.com</p>
            <p onClick={() => (window.location = "tel:+233 55-1550-530")}>+233 55-1550-530</p>
       </div>
       <div className="ftBtm">Bringing you code with a touch from Heaven</div>
    </div>
  )
}

export default Footer