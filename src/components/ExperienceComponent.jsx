import React from "react";

const ExperienceComponent = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "A10 Networks, Inc.",
      duration: "Dec 2022 - Jul 2023",
      location: "California, USA",
      details: [
        "Strengthened API security by integrating OAuth 2.0 and JWT authentication, reducing system vulnerabilities by 32%.",
        "Improved communication speed by 25% through the implementation of Spring Cloud microservices and real-time Kafka message processing.",
        "Achieved an 87.5% reduction in application runtime by optimizing Maven applications using advanced multithreading techniques.",
        "Implemented Spring Cloud Gateway for efficient request routing, authentication, and rate limiting, ensuring secure, scalable, and high-performance microservices while enhancing system reliability and maintaining seamless traffic management.",
        "Accelerated development time by utilizing a GraphQL API server with graphql-http, simplifying data fetching and reducing frontend complexity when interacting with the PostgreSQL database.",
        "Enhanced multi-container architecture with Kubernetes, accelerating the development cycle and reducing deployment times for critical applications from five hours to under two hours."
      ]
    },

    {
      title: "Software Engineer",
      company: "Allstate",
      duration: "Apr 2021 - Nov 2021",
      location: "Illinois, USA",
      details: [
        "Developed enterprise-grade Java applications using Spring Boot, ensuring high performance and scalability across distributed systems.",
        "Designed and developed RESTful APIs using Spring Boot to facilitate seamless communication between distributed systems, optimizing data processing, request handling, and service interoperability to improve overall application efficiency.",
        "Built and maintained microservices with Spring Boot and Hibernate, improving modularity and maintainability across 7+ independent services.",
        "Optimized database queries in Oracle SQL, reducing response times by 20ms through efficient indexing and normalization techniques.",
        "Integrated legacy systems using Java Database Connectivity (JDBC) and Object-Relational Mappers (ORMs) such as JPA, ensuring smooth data flow and minimizing manual intervention.",
        "Collaborated in Agile and SAFe development environments, participating in 12+ sprints and consistently delivering features on schedule."
      ]
    },
    
    {
      title: "Software Engineer",
      company: "MetLife",
      duration: "Jan 2020 - Mar 2021",
      location: "Kansas, USA",
      details: [
        "Implemented Test-Driven Development (TDD) practices using JUnit, Mockito, and Cucumber, ensuring high test coverage, minimizing defects.",
        "Developed automation scripts for UI testing with Selenium and WebDriverIO, improving test efficiency and reliability in an Agile environment.",
        "Deployed cloud-native solutions on AWS, integrated CI/CD pipelines using Jenkins & Spinnaker, reducing deployment time from 2hr to 30min.",
        "Containerized applications with Docker and managed artifact repositories using JFrog, standardizing environments across development, testing, and production for seamless deployment.",
        "Secured applications using OAuth 2.0 and encryption protocols, ensuring compliance with GDPR and SOC 2 security standards."
      ]
    },
    
    {
      title: "Software Engineer",
      company: "American Express",
      duration: "Feb 2019 - Dec 2019",
      location: "Newyork, USA",
      details: [
        ,
    
        {
          title: "Software Engineer",
          company: "MetLife",
          duration: "Jan 2020 - Mar 2021",
          location: "Kansas, USA",
          details: [
            "Engineered critical functionalities for a next-generation card payment network by implementing Vert.x and Spring Boot microservices, improving transaction processing speed by 30% while maintaining system reliability.",
            "Optimized over 50 complex SQL queries and integrated MongoDB with AWS SDK, enhancing data retrieval efficiency by 25%.",
            "Improved the clarity and usability of API documentation by implementing OpenAPI specifications, resulting in a 20% reduction in onboarding time for new developers and boosting cross-team integration efficiency.",
            "Successfully deployed three microservices on Amazon EC2 using Docker, reducing deployment time by 35%."
          ]
        }
      ]
    }
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
