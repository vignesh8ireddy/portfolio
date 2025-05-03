import React from "react";
import a10 from "../assets/experience/A10Networks.png";
import allstate from "../assets/experience/Allstate.png";
import metlife from "../assets/experience/MetLife.png";
import amex from "../assets/experience/AmEx.png";

const ExperienceComponent = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "A10 Networks",
      duration: "Dec 2022 - Jul 2023",
      location: "California, USA",
      logo: a10
    },

    {
      id: 2,
      title: "Software Engineer",
      company: "Allstate",
      duration: "Apr 2021 - Nov 2022",
      location: "Illinois, USA",
      logo: allstate
    },

    {
      id: 3,
      title: "Software Engineer",
      company: "MetLife",
      duration: "Jan 2020 - Mar 2021",
      location: "Kansas, USA",
      logo: metlife
    },

    {
      id: 2,
      title: "Software Engineer",
      company: "American Express",
      duration: "Feb 2019 - Dec 2019",
      location: "New York, USA",
      logo: amex
    }
  ];

  return (
    <div className="text-gray-800 p-6 mt-8 lg:pt-40 mx-auto max-w-6xl font-title" id="experience">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl text-center mb-12">WORK EXPERIENCE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-32 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                {/* Logo */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-30 h-30 object-contain mb-4"
                />
                {/* Edu Name */}
                <h3 className="text-xl font text-gray-900 mb-2">{exp.title}</h3>
                {/* Technologies */}
                <p className="text-gray-600 text-sm mb-4">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
