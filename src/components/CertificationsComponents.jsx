import React from "react";
import awslogo from "../assets/certifications/aws.png";
import awsacademy from "../assets/certifications/awsacademy.png";
import hackerrank from "../assets/certifications/hackerrank.png";
import hrb from "../assets/certifications/hackerrankbadges.png";

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    logo: awslogo,
    credentials: "https://www.credly.com/badges/b410c06f-1eeb-412b-af64-0d193b42bde5",
  },
  {
    id: 2,
    name: "AWS Academy Graduate",
    logo: awsacademy,
    credentials: "https://www.credly.com/badges/cc290cc8-c041-486a-ba9b-a528b62c0b70/public_url",
  },
  {
    id: 3,
    name: "HackerRank Problem Solving (Basic)",
    logo: hackerrank,
    credentials: "https://www.hackerrank.com/certificates/dd6d8da2f200",
  },
  {
    id: 4,
    name: "HackerRank Badges",
    logo: hrb,
    credentials: "https://www.hackerrank.com/profile/vignesh8ireddy",
  }
];

const CertificationsComponent = () => {
  return (
<div id="certifications" className="p-16 mt-8 lg:pt-40 mx-auto max-w-6xl font-title">
      <h2 className="text-3xl mb-8 md:text-4xl text-center text-gray-800 mb-8">
        CERTIFICATIONS & ACHIEVEMENTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-36 shadow-md rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {cert.name}
            </h3>
            <a
              href={cert.credentials}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-sm bg-gray-100 p-1"
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
