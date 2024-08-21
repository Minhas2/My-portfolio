import React from "react";
import "./My-Resume.css";

export default function MyResume({isDarkMode, setIsDarkMode}) {
  return (
    <div className="container">
      <div className="row mt-Resume">
        <div className="col-md-6 col-lg-6 margin-auto">
          <div className="josh-heading">
            Hi 👋, <br /> My name is <br />
            <span className="joshua-font">Joshua Wilson</span> <br />I program
            sometimes
          </div>
        </div>
        <div className="col-md-6 col-lg-6 d-flex justify-content-center res-mt-768">
          <img src="../assets/josh.png" alt="" className="res-josh-375" />
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-resume-button">
        <button className="resume-btn d-flex align-items-center" style={{ color: isDarkMode ? '#ffffff' : '#000000'}}>
          <img src="../assets/SVG.png" alt="" />
          <div>RESUME</div>
        </button>
      </div>
    </div>
  );
}
