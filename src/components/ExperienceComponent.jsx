import React from "react";

const ExperienceComponent = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Siliconbricks Technologies Pvt. Ltd.",
      duration: "Aug 2017 - Jul 2023",
      location: "Bengaluru, India",
      details: [
        "Developed RESTful APIs using Spring Boot to support financial applications, efficiently processing over 10,000 API requests daily to enable seamless backend-to-frontend communication and ensure accurate financial data handling.",
        "Architected microservices with Spring Boot and Hibernate, enhancing scalability and maintainability across 12+ independent services in a distributed system.",
        "Built dynamic and user-friendly web applications using React, improving data-intensive workflows for over 100 tax professionals and enhancing overall user experience.",
        "Designed and optimized relational database schemas in Oracle SQL, improving data integrity and reducing query response times by 20ms through advanced normalization techniques.",
        "Streamlined ETL workflows in MongoDB, managing over 700,000 compliance records and enabling efficient cross-departmental data sharing.",
        "Deployed cloud-native solutions on AWS EC2 and RDS, ensuring 99.9% uptime and high reliability for a global client base.",
        "Automated CI/CD pipelines using Jenkins, reducing deployment times from 2 hours to 30 minutes and enabling faster delivery cycles.",
        "Containerized applications using Docker, standardizing over 100 deployment environments across development, testing, and production for consistent and reliable operations.",
        "Executed unit and integration testing using JUnit and Mockito, ensuring high-quality code and identifying potential issues early in the development lifecycle.",
        "Secured sensitive client data with OAuth 2.0 and advanced encryption protocols, achieving compliance with GDPR and SOC 2 standards.",
        "Collaborated with cross-functional Agile teams, delivering features over 12+ sprints and consistently meeting project deadlines while exceeding client expectations.",
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
