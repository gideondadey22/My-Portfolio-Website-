import React, { useState } from 'react';
import { FcMindMap } from "react-icons/fc";
import Socials from '../Socials/Socials';
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="headContainer">
      {/* Logo */}
      <div className="logo">
        <FcMindMap />
        <h3>MY PORTFOLIO</h3>
      </div>

      {/* Desktop Links */}
      <nav className="links">
        <Link to="projects" smooth duration={1000}><li>PROJECTS</li></Link>
        <Link to="tech" smooth duration={1000}><li>TECH STACKS</li></Link>
        <Link to="about" smooth duration={1000}><li>ABOUT</li></Link>
      </nav>

      {/* Desktop Socials */}
      <div className="socials">
        <Socials />
      </div>

      {/* Hamburger Menu */}
      <div
        className="hamMenu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      {/* Mobile Slide-In Menu */}
      <nav className={`mobileMenu ${menuOpen ? "active" : ""}`}>
        <Link to="projects" smooth duration={1000} onClick={() => setMenuOpen(false)}><li>PROJECTS</li></Link>
        <Link to="tech" smooth duration={1000} onClick={() => setMenuOpen(false)}><li>TECH STACKS</li></Link>
        <Link to="about" smooth duration={1000} onClick={() => setMenuOpen(false)}><li>ABOUT</li></Link>
      </nav>
    </header>
  );
};

export default Header;
