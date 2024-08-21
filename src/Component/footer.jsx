import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <div className="container">
      <div className="d-flex footer-josh-header">Joshua Wilson</div>

      <div className="row row-footer-mt">
        <div className="col-md-4 col-sm-4 col-sm-4 col-4 footer-fonts">
          <div>Home</div>
          <div className="mt-links-footer">About</div>
          <div className="mt-links-footer">Stats</div>
          <div className="mt-links-footer">Utilities</div>
          <div className="mt-links-footer">Blogs</div>
        </div>

        <div className="col-md-4 col-sm-4 col-sm-4 col-4 footer-fonts">
          <div>Certificates</div>
          <div className="mt-links-footer">Projects</div>
          <div className="mt-links-footer">Snippets</div>
          <div className="mt-links-footer">Privacy</div>
          <div className="mt-links-footer">Newsletter</div>
          <div className="mt-links-footer">RSS</div>
        </div>

        <div className="col-md-4 col-sm-4 col-sm-4 col-4 footer-fonts">
          
          <div >Twitter</div>
          <div className="mt-links-footer">Linkedin</div>
          <div className="mt-links-footer">Gitgub</div>
          <div className="mt-links-footer">Instagram</div>
          <div className="mt-links-footer">Dev.To</div>
        </div>
      </div>
    </div>
  );
}
