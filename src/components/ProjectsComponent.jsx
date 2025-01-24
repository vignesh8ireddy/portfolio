import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import whatsapplogo from "../assets/projects/whatsapp.png";
import ecommercelogo from "../assets/projects/ecommerce.png";

const projects = [
  {
    id: 1,
    name: "WhatsApp Clone",
    technologies: "Java, Spring Boot, React",
    github: "https://github.com/vignesh8reddy/whatsapp-clone",
    logo: whatsapplogo,
  },
  {
    id: 2,
    name: "E-Commerce Website",
    technologies: "MERN Stack",
    github: "https://github.com/vignesh8reddy/e-commerce-app",
    logo: ecommercelogo,
  },
];

const ProjectsComponent = () => {
  return (
    <div className="text-gray-800 p-6 lg:pt-40 mx-auto max-w-6xl font-title" id="projects">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl text-center mb-12">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                {/* Logo */}
                <img
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  className="w-32 h-32 object-contain mb-4"
                />
                {/* Project Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                {/* Technologies */}
                <p className="text-gray-600 text-sm mb-4">{project.technologies}</p>
                {/* GitHub Link */}
                <a
                  href={project.github}
                  className="inline-flex items-center text-gray-400 bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
