import React from 'react';
import "./Projects.scss";
import blgImg from "../images/blg.PNG";
import SocImg from "../images/socio-img.PNG";
import ishopImg from "../images/ishop-bg.PNG";
import shopinImg from "../images/kada.png";
import buidImg from "../images/buidly-bg.PNG";
import paradigImg from "../images/Paradigma-bg.jpg";

const Projects = () => {
  return (
    <div id="projects">
    <div className="projectContainer">
        <div className="projHead">
            <h2>PROJECTS</h2>
            <p>DIVE INTO SOME OF MY CREATIONS</p>
        </div>
        <div className="project">
            <div className="Kada App">
              <img src={shopinImg} alt="ishop-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>Kada App</h2>
              <p>Landing page for Kada Mobility, a green transportation  and ride hailing startup. Stack: NextJs, Typescript, TailwindCSS, API, Sanity, Vite</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://web-app-beta-brown.vercel.app/'}>View Project</div>
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/Kada-Web-App'}>View Code</div>
              </div>
            </div>
        </div>
        <div className="project">
            <div className="left">
              <img src={ishopImg} alt="ishop-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>Dash UI</h2>
              <p>A modern admin dashboard UI for businesses or administrators to manage data and interact with applications efficiently. Stack: NextJs, Typescript, TailwindCSS, JavaScript</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://modern-admin-dashboard-two.vercel.app/'}>View Project</div>
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/Modern-Admin-Dashboard'}>View Code</div>
              </div>
            </div>
        </div>
        <div className="project">
            <div className="left">
              <img src={paradigImg} alt="paradig-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>POS Inventory</h2>
              <p>A System that automate retail inventory tracking with time updates. Stack: Laravel, Blade, PHP, JavaScript, CSS</p>
              <div className="prjButton">
              
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/POS-Inventory-System'}>View Code</div>
              </div>
            </div>
        </div>
        <div className="project">
            <div className="left">
              <img src={buidImg} alt="buid-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>Dash Settings</h2>
              <p>Dash UI Settings page. Stack: ReactJs, Material-UI, React-Router-DOM, SCSS, React Animation</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://modern-admin-dashboard-two.vercel.app/'}>View Project</div>
              <div className="link" onClick={() => window.location = ''}>View Code</div>
              </div>
            </div>
        </div>
        <div className="project">
            <div className="left">
              <img src={blgImg} alt="blg-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>Abizi Estate Broker</h2>
              <p>Real Estate listing and brokerage platform where agents can post properties, manage leads and connect with buyers. Stack: NextJs, Typescript, TailwindCSS, JavaScript .</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/Real-Estate-Broker-'}>API</div>
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/Real-Estate-Broker-'}>View Code</div>
              </div>
            </div>
        </div>
        <div className="project">
            <div className="left frmPlus">
              <img src={SocImg} alt="soc-img"/>
            </div>
            <div className="right">
              <h4>ILLUSTRATION</h4>
              <h2>Fake News Detector</h2>
              <p>A NLP that achieved 92% accuracy in classifying misinformation featuring a responsive and optimized UI. Stack: Python, Flask, JavaScript, Scikit-learn, Rest API, CSS.</p>
              <div className="prjButton">
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/Real-Estate'}>API</div>
              <div className="link" onClick={() => window.location = 'https://github.com/gideondadey22/Real-Estate'}>View Code</div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects