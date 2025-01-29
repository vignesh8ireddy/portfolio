import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const AboutComponent = () => {
  return (
    <div >


    <div id="about"  
      className="pt-32 px-4 md:p-10 lg:pt-40 pb-16 mx-auto max-w-6xl font-title">
      <h1 className="text-4xl pb-2  text-center md:text-3xl lg:text-5xl text-gray-800 mb-5">
        I'm VIGNESH R. IREDDY,
      </h1>
      <p className="text-base text-justify md:text-lg lg:text-xl text-gray-600 leading-relaxed">
        a Java Developer with expertise in building scalable and robust
        applications using Java, Spring Boot, and emerging frontend
        technologies. With a commitment to clean code, efficient architecture,
        and continuous learning, I specialize in creating seamless user
        experiences and efficient backend systems. Driven by a deep curiosity
        for solving complex problems, staying at the forefront of technology,
        and delivering impactful solutions that drive progress, I strive to
        make a meaningful difference through my work.
      </p>
      <div className="flex justify-center pt-2">
        <a href="https://linkedin.com/in/vignesh8ireddy" target="_blank"><FontAwesomeIcon  className="size-10 p-3" icon={ faLinkedin } /></a>
        <a href="https://github.com/vignesh8ireddy" target="_blank"><FontAwesomeIcon  className="size-10 p-3" icon={ faGithub } /></a>
        <a href="mailto:vignesh8ireddy@gmail.com" target="_blank"><FontAwesomeIcon  className="size-10 p-3" icon={ faEnvelope } /></a>
      </div>

    </div>
    </div>
  );
};

export default AboutComponent;