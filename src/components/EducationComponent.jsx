import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ucmlogo from "../assets/education/ucm.png";

const education = [
  {
    id: 1,
    degree: "Master's Degree in Computer Science",
    university: "University of Central Missouri",
    duration: "Aug 2023 - May 2025",
    logo: ucmlogo,
  }
];

const EducationComponent = () => {
  return (
    <div className="text-gray-800 p-6 mt-8 lg:pt-40 mx-auto max-w-6xl font-title" id="education">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl text-center mb-12">EDUCATION</h2>
        <div className="grid-center grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                {/* Edu Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.university}</h3>
                {/* Logo */}
                <img
                  src={edu.logo}
                  alt={`${edu.university} Logo`}
                  className="w-48 h-48 object-contain mb-4"
                />
                {/* Edu Name */}
                <h3 className="text-xl font text-gray-900 mb-2">{edu.degree}</h3>
                {/* Technologies */}
                <p className="text-gray-600 text-sm mb-4">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
