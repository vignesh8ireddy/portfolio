import React from "react";
import awslogo from "../assets/certifications/aws.png";
import gatelogo from "../assets/certifications/gate.png"

const certifications = [
  {
    id: 1,
    name: "AWS Solutions Architect Certified",
    logo: awslogo,
    crendentials: "https://www.credly.com/badges/b410c06f-1eeb-412b-af64-0d193b42bde5/public_url",
  },
  {
    id: 2,
    name: "GATE 2023 (Organised by IIT Kanpur) Qualified",
    logo: gatelogo,
    credentials: "https://github.com/vignesh8reddy/GATE2022/blob/main/C103V46ScoreCard.pdf",
  }
];

const CertificationsComponent = () => {
  return (
    <div id="certifications" className="p-6 lg:pt-40 mx-auto max-w-6xl font-title">
      <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-8">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {cert.name}
            </h3>
            <a
              href={cert.credentials}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              View Credentials
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsComponent;
