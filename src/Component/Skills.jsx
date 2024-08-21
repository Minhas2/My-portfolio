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
            <img src="../assets/Skill1.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/Skill2.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-575">
            <img src="../assets/Skill3.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-992">
            <img src="../assets/Skill4.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-992">
            <img src="../assets/Skill5.png" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-992">
            <img src="../assets/Skill6.svg" alt="" />
          </div>
        </div>

        <div className="row mt-skill-row">
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/Skill7.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center">
            <img src="../assets/Skill8.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center res-mt-575">
            <img src="../assets/Skill9.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center  res-mt-992">
          { isDarkMode ? <img src="../assets/skill10dark.png" alt="" /> :    <img src="../assets/Skill10.svg" alt="" />}
          
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center  res-mt-992">
            <img src="../assets/Skill11.svg" alt="" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 d-flex justify-content-center  res-mt-992">
          { isDarkMode ? <img src="../assets/skill12dark.png" alt="" /> :  <img src="../assets/Skill12.svg" alt="" />}
            
          </div>
        </div>
      </section>
    </div>
  );
}
