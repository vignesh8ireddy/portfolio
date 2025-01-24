import React from "react";

const projects = [
  {
    id: 1,
    name: "WhatsApp Clone",
    technologies: "Java, Spring Boot, React",
    github: "https://github.com/vignesh8reddy/whatsapp-clone",
  },
  {
    id: 2,
    name: "E-Commerce Website",
    technologies: "MERN Stack",
    github: "https://github.com/vignesh8reddy/e-commerce-app",
  }
];

const ProjectsComponent = () => {
  return (
    <div className="text-gray-800 p-6 lg:pt-40 mx-auto max-w-6xl font-title" id="projects">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gray-500 text-gray-50 px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
