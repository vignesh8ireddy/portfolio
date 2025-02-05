import React from "react";

const ExperienceComponent = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Siliconbricks Technologies Pvt. Ltd.",
      duration: "Aug 2017 - Jul 2023",
      location: "Bengaluru, India",
      details: [
        "Developed enterprise-grade Java applications using Spring Boot and Dropwizard, ensuring high performance and scalability across distributed systems.",
        "Designed and implemented RESTful APIs with Java 8, optimizing backend-to-frontend communication and processing 10,000+ API requests daily.",
        "Built and maintained microservices with Spring Boot and Hibernate, improving modularity and maintainability across 12+ independent services.",
        "Optimized database queries in Oracle SQL, reducing response times by 20ms through efficient indexing and normalization techniques.",
        "Implemented Test-Driven Development (TDD) practices using JUnit, Mockito, and Cucumber, ensuring high test coverage and minimizing defects.",
        "Developed automation scripts for UI testing with Selenium and WebDriverIO, improving test efficiency and reliability in an Agile development environment.",
        "Deployed cloud-native solutions on AWS (EC2, RDS) and integrated CI/CD pipelines using Jenkins, reducing deployment time from 2 hours to 30 minutes.",
        "Containerized applications with Docker, standardizing environments across development, testing, and production for seamless deployment.",
        "Secured applications using OAuth 2.0 and encryption protocols, ensuring compliance with GDPR and SOC 2 security standards.",
        "Collaborated in Agile and SAFe development environments, participating in 12+ sprints and consistently delivering features on schedule."
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Siliconbricks Technologies Pvt. Ltd.",
      duration: "Jan 2017 - Jul 2017",
      location: "Bengaluru, India",
      details: [
        "Gained hands-on experience in backend development by assisting with the design and implementation of microservices using Spring Boot, contributing to an e-commerce platform's architecture.",
        "Supported the integration of RESTful APIs and database management tasks, including performing CRUD operations and optimizing MongoDB queries for improved data handling and performance.",
      ],
    },
  ];

  return (
    <div id="experience" className="p-6 lg:pt-28 mx-auto max-w-6xl font-title">
      <h2 className="text-3xl pb-6 m-8 md:text-4xl text-center text-gray-800 mb-8">
        WORK EXPERIENCE
      </h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-50 shadow-lg rounded-lg p-6 border border-gray-200 m-6 transition-transform transform hover:scale-105"
        >
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <div className="text-gray-600 font-medium">{exp.company}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{exp.duration}</div>
              <div className="text-sm text-gray-500">{exp.location}</div>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;
