import React from "react";
import "./projects.css";

export default function projects() {
  return (
    <div className="container">
      {/* Project SECTION */}
      <section className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center flex-column  mt-skill">
          <div className="Skill-header">Projects</div>
          <div className="skill-para">Things I’ve built so far</div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-lgx-4 col-md-12">
            <div className="card margin-auto">
              <img
                className="card-img-top"
                src="../assets/project1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="project-title">Project Tile goes here</div>
                <div className="project-text">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </div>
                <p className="project-para">
                  <span className="tech-font">Tech stack :</span> HTML ,
                  JavaScript, SASS, React
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src="../assets/card-chain.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="live-font">Live Preview</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-lgx-4 col-md-12 res-project-mt-992">
            <div className="card margin-auto" >
              <img
                className="card-img-top"
                src="../assets/project2.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="project-title">Project Tile goes here</div>
                <div className="project-text">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </div>
                <p className="project-para">
                  <span className="tech-font">Tech stack :</span> HTML ,
                  JavaScript, SASS, React
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src="../assets/card-chain.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="live-font">Live Preview</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-lgx-4 col-md-12 res-project-mt-992">
            <div className="card margin-auto">
              <img
                className="card-img-top"
                src="../assets/project3.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="project-title">Project Tile goes here</div>
                <div className="project-text">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </div>
                <p className="project-para">
                  <span className="tech-font">Tech stack :</span> HTML ,
                  JavaScript, SASS, React
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src="../assets/card-chain.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="live-font">Live Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-project-row">
          <div className="col-lg-4 col-lgx-4 col-md-12 ">
            <div className="card margin-auto">
              <img
                className="card-img-top"
                src="../assets/project4.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="project-title">Project Tile goes here</div>
                <div className="project-text">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </div>
                <p className="project-para">
                  <span className="tech-font">Tech stack :</span> HTML ,
                  JavaScript, SASS, React
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src="../assets/card-chain.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="live-font">Live Preview</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-lgx-4 col-md-12 res-project-mt-992">
            <div className="card margin-auto">
              <img
                className="card-img-top"
                src="../assets/project5.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="project-title">Project Tile goes here</div>
                <div className="project-text">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </div>
                <p className="project-para">
                  <span className="tech-font">Tech stack :</span> HTML ,
                  JavaScript, SASS, React
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src="../assets/card-chain.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="live-font">Live Preview</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-lgx-4 col-md-12 res-project-mt-992">
            <div className="card margin-auto">
              <img
                className="card-img-top"
                src="../assets/project6.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="project-title">Project Tile goes here</div>
                <div className="project-text">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </div>
                <p className="project-para">
                  <span className="tech-font">Tech stack :</span> HTML ,
                  JavaScript, SASS, React
                </p>

                <div className="d-flex align-items-center">
                  <img
                    src="../assets/card-chain.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="live-font">Live Preview</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="d-flex justify-content-end view-font ">View All Projects &#8594;</div>
      </section>
    </div>
  );
}
