import React from "react";
import "./Services.scss";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { FaServer, FaPalette } from "react-icons/fa"; // new icons

const Services = () => {
  return (
    <section id="tech" className="serviceContainer">
      <h2 className="headText">What I Do</h2>

      <div className="content">
        {/* Frontend */}
        <div className="card">
          <div className="lanIcn react">
            <DiReact />
          </div>
          <h3>Frontend Development</h3>
          <p>
            Crafting seamless, scalable, and accessible UIs using{" "}
            <strong>React.js, TypeScript, HTML5, CSS3, TailwindCSS, and
            Material-UI</strong>.
          </p>
        </div>

        {/* Backend */}
        <div className="card">
          <div className="lanIcn node">
            <DiNodejsSmall />
          </div>
          <h3>Backend Development</h3>
          <p>
            Building secure and high-performance APIs with{" "}
            <strong>Node.js, Express, MongoDB, JWT, and Joi validation</strong>.
          </p>
        </div>

        {/* DevOps */}
        <div className="card">
          <div className="lanIcn devops">
            <FaServer />
          </div>
          <h3>DevOps & Deployment</h3>
          <p>
            Automating builds, deployments, and CI/CD pipelines using{" "}
            <strong>Docker, Kubernetes, AWS, and GitHub Actions</strong>.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="card">
          <div className="lanIcn design">
            <FaPalette />
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Designing intuitive interfaces and experiences with{" "}
            <strong>Figma, Adobe XD, and design thinking principles</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
