import React from "react";
import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
import ProjectsComponent from './components/ProjectsComponent';
import SkillsComponent from "./components/SkillsComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import CertificationsComponent from "./components/CertificationsComponents";

import Hero from "./assets/vignesh.jpg"; // Import the hero image

function App() {
  return (
    <div className="bg-gray-50 h-screen flex flex-col overflow-hidden pb-10">
      {/* Navbar Component */}
      <NavbarComponent />

      <div className="flex h-full">
        {/* Scrollable Left Content Area */}
        <div className="bg-gray-50 overflow-y-auto no-scrollbar">

          <AboutComponent />
          <SkillsComponent />
          <ExperienceComponent />
          <ProjectsComponent />
          <CertificationsComponent />
          <ContactComponent />
          <FooterComponent />
        </div>

        {/* Fixed Right Image Section */}
        <div className="lg:w-1/3 md:w-1/3 h-screen bg-gray-50">
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Hero})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
