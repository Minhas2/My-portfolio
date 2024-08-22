import React from "react";
import "./Skills.css";

export default function Skills({isDarkMode, setIsDarkMode}) {
  return (
    <div className="container">
      {/* SKILLS SECTION */}
      <section className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center flex-column  mt-skill">
          <div className="Skill-header">My Top Skills</div>
          <div className="skill-para">
            Technologies I’ve been working with recently
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/skill1.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/skill2.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-575">
            <img src="../assets/skill3.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-992">
            <img src="../assets/skill4.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-992">
            <img src="../assets/skill5.png" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-992">
            <img src="../assets/skill6.svg" alt="" />
          </div>
        </div>

        <div className="row mt-skill-row">
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/skill7.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/skill8.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-575">
            <img src="../assets/skill9.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center  res-mt-992">
          { isDarkMode ? <img src="../assets/skill10dark.png" alt="" /> :    <img src="../assets/skill10.svg" alt="" />}
          
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center  res-mt-992">
            <img src="../assets/skill11.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center  res-mt-992">
          { isDarkMode ? <img src="../assets/skill12dark.png" alt="" /> :  <img src="../assets/skill12.svg" alt="" />}
            
          </div>
        </div>
      </section>
    </div>
  );
}
