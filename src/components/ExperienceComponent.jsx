import React from "react";

const experience = [
  {
    Company: "Siliconbricks Technologies",
    Role: "Full Stack Java Developer",
    Duration: "Aug 2021 - Jul 2024",
    Location: "Bangalore, India",
  },
  {
    Company: "Siliconbricks Technologies",
    Role: "Software Engineer Intern",
    Duration: "Jan 2021 - May 2021",
    Location: "Bangalore, India",
  },
];

const ExperienceComponent = () => {
  return (
    <div id="experience" className="p-6 lg:p-12 bg-gray-50" >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {exp.Role}
            </h3>
            <p className="text-gray-600 font-medium mb-4">{exp.Company}</p>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Duration:</strong> {exp.Duration}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Location:</strong> {exp.Location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
