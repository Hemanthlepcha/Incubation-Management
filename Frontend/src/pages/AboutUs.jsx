import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import caro from "/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/assets/aboutbg.jpeg";
import caro1 from "/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/assets/mine.png";
import caro5 from "/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/assets/chimi.jpg";

import caro2 from "/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/assets/ugyen.png";
import caro3 from "/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/assets/jamstho.png";
import caro4 from "/home/hemanth/Documents/GitHub/Incubation-Management/startUp/Frontend/src/assets/yes.jpg";

import "./AboutUs.css";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="custom-about-container">
      {/* Section 1 - Large Image */}
      <div
        className={`custom-about-image ${isVisible ? "visible" : ""}`}
        style={{ backgroundImage: `url(${caro})` }}
      >
        <div className="custom-overlay">
          <div className="custom-centered-text">
            <TypingEffect text="Our Services" />
          </div>
        </div>
      </div>

      {/* Section 2 - What We Do */}
      <div className={`custom-about-section ${isVisible ? "visible" : ""}`}>
        <h2 className="custom-about-heading">
          Your Startup Journey starts here
        </h2>
        <h2 className="custom-about-heading">What We Do</h2>
        <div className="custom-box-container">
          {/* Box 1 */}
          <div className="custom-box">
            <h2 className="custom-box-heading"><b>Goal</b></h2>
            <p className="custom-box-description">
              The CST incuabtion centre is looking for entrepreneurs capable of harnessing
              emerging technologies to create innovative products, solutions, or
              services that will contribute to Qatar’s digital economy.
            </p>
          </div>
          {/* Box 2 */}
          <div className="custom-box">
            <h2 className="custom-box-heading"><b>Vision</b></h2>
            <p className="custom-box-description">
              "Nurturing creativity, innovation, and promoting entrepreneurship
              in harmony with GNH philosophy," CST-Tech Incubation Centre
              provides co-working space and business development services to its
              Incubates, while striving to instill and promote an
              entrepreneurial mindset and a vibrant entrepreneurial culture in
              the college and communities.
            </p>
          </div>
          {/* Box 3 */}
          <div className="custom-box">
            <h2 className="custom-box-heading"><b>Funded By</b></h2>
            <p className="custom-box-description">
              The Centre is funded and supported by Entrepreneurship Promotion
              Division (ED), Department of Employment and Entrepreneurship
              (DoEE), Ministry of Labor and Human Resources (MoLHR) through
              Start-up/ CSI Flagship Program.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Meet Our Team */}
      {/* Section 3 - Meet Our Team */}
      <div className={`custom-about-section ${isVisible ? "visible" : ""}`}>
        <h2 className="custom-about-heading">Meet Our Team</h2>

        <div className="custom-team-container">
          {/* Team Member 1 */}
          <div className="custom-team-member">
            <div className="custom-bg-white p-4 rounded-lg shadow-lg h-full">
              <FontAwesomeIcon
                icon={faUser}
                className="w-60 h-60 text-gray-500 mb-2" // Adjust the width (w-8) and height (h-8) as needed
              />
              <h3 className="custom-text-xl font-semibold mb-2">
                Chimi Wangpo
              </h3>
              <p className="custom-text-gray-700">Editor.</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="custom-team-member">
            <div className="custom-bg-white p-4 rounded-lg shadow-lg h-full">
              <FontAwesomeIcon
                icon={faUser}
                className="w-60 h-60 text-gray-500 mb-2" // Adjust the width (w-8) and height (h-8) as needed
              />
              <h3 className="custom-text-xl font-semibold mb-2">
                Ugyen Poljor
              </h3>
              <p className="custom-text-gray-700">Designer.</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="custom-team-member">
            <div className="custom-bg-white p-4 rounded-lg shadow-lg h-full">
              <FontAwesomeIcon
                icon={faUser}
                className="w-60 h-60 text-gray-500 mb-2" // Adjust the width (w-8) and height (h-8) as needed
              />
              <h3 className="custom-text-xl font-semibold mb-2">
                Hemanth Lepcha
              </h3>
              <p className="custom-text-gray-700">Viewer.</p>
            </div>
          </div>
        </div>
        <div className="custom-team-container">
          {/* Team Member 4 */}
          <div className="custom-team-member">
            <div className="custom-bg-white p-4 rounded-lg shadow-lg h-full">
              <FontAwesomeIcon
                icon={faUser}
                className="w-60 h-60 text-gray-500 mb-2" // Adjust the width (w-8) and height (h-8) as needed
              />
              <h3 className="custom-text-xl font-semibold mb-2">
                Tshering Jumpstho
              </h3>
              <p className="custom-text-gray-700">Player.</p>
            </div>
          </div>
          {/* Team Member 5 */}
          <div className="custom-team-member">
            <div className="custom-bg-white p-4 rounded-lg shadow-lg h-full">
              <FontAwesomeIcon
                icon={faUser}
                className="w-60 h-60 text-gray-500 mb-2" // Adjust the width (w-8) and height (h-8) as needed
              />
              <h3 className="custom-text-xl font-semibold mb-2">
                Yeshi Tshomo
              </h3>
              <p className="custom-text-gray-700">Presentator.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
