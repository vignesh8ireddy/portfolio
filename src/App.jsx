import React from "react";
import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
import SkillsComponent from "./components/SkillsComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import CertificationsComponent from "./components/CertificationsComponents";

import Hero from "./assets/vignesh.jpg"; // Import the hero image
import EducationComponent from "./components/EducationComponent";

function App() {
  /*return (
    <div className="bg-gray-50 flex flex-col h-screen">
      {/* Navbar Component */}
      <NavbarComponent />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Scrollable Left Content Area */}
        <div className="bg-gray-50 flex-1 overflow-y-scroll no-scrollbar">
          {/* Add padding to prevent content from being hidden under the navbar */}
          <div className="pt-16">
            <AboutComponent />
            <SkillsComponent />
            <ExperienceComponent />
            <EducationComponent />
            <CertificationsComponent />
            <ContactComponent />
            <FooterComponent />
          </div>
        </div>

        {/* Fixed Right Image Section */}
        <div className="hidden md:block md:w-1/3 lg:w-1/3">
          <div
            className="sticky top-16 h-[calc(100vh-4rem)] bg-cover bg-center"
            style={{ backgroundImage: `url(${Hero})` }}
          ></div>
        </div>
      </div>
    </div>
  );*/
}

export default App;
