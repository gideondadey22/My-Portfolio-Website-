import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";
import Socials from '../Socials/Socials';
import "./Hamburger.scss"


const Hamburger = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="hamburger-menu">
        {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="fixed sm:text-black md:text-black left-[19.5rem] sm:text-[1.5rem] sp:left-[18.3rem] spx:left-[21.5rem] sm:left-[21.8rem] nxx:left-[19.2rem] nxxx:left-[16.5rem] md:left-[40rem] top-[1.3rem] sm:top-[1.5rem] md:top-[1.2rem] md:text-4xl text-3xl z-50 sm:block md:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><LiaTimesSolid /></i>
        ) : (
          <i
            className="text-3xl sm:text-[1.5rem] md:block sm:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><RxHamburgerMenu /></i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-full bg-white pt-8 text-black fixed overflow-y-auto top-[0px] w-[100%] md:w-[100%] sm:flex sm:items-center sm:justify-center sm:text-center md:flex md:items-center md:justify-center md:text-center sm:z-40 md:z-40 sm:block md:block sm:bg-white md:bg-white z-50 duration-1000 ${
            nav ? "left-[0px]" : "left-[-100vw]"
          } `}
        >
        <div className='sm:text-black sm:flex sm:flex-col sm:gap-[2rem] sm:text-[1.1rem] md:flex md:flex-col md:gap-[3rem] md:text-[2rem]'>
        <Link to="projects" smooth={true} duration={1000}>
            <MenuItem>Projects</MenuItem>
          </Link>
          <Link to="tech" smooth={true} duration={1000}>
            <MenuItem>Tech Stacks</MenuItem>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <MenuItem>About</MenuItem>
          </Link>
          <MenuItem>
           <div className="socialIcns">
            <Socials />
           </div>
          </MenuItem>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Hamburger;
