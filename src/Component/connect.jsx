import React from "react";
import "./connect.css";

export default function connect() {
  return (
    <div className="container">
      {/* Connect SECTION */}
      <section className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center flex-column  mt-skill">
          <div className="connect-header">Get in touch</div>
          <div className="connect-para">
            Is there something on your mind you'd like to talk about? Whether
            it's related to work or just a casual conversation, I am here and
            ready to listen. Please don't hesitate to reach out to me at any
            time. 🙋‍♂️.
          </div>
        </div>

        <div className="d-flex justify-content center align-items center">
          <div className="connect-with-me margin-auto">Connect with me</div>
        </div>

        <div className="form-box row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="First name"
              className="w-100  input-box"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Last name"
              className="w-100 input-box res-mt-form-768"
            />
          </div>
          <div className="col-lg-12">
            <input
              type="text"
              placeholder="Email address"
              className="w-100 mt-input-form input-box"
            />
          </div>
          <div className="col-lg-12">
            <input
              type="text"
              placeholder="Subject"
              className="w-100 mt-input-form input-box"
            />
          </div>
          <div className="col-lg-12">
            <textarea
              placeholder="Message"
              className="w-100 mt-input-form input-box"
              rows="3"
            ></textarea>

            
          </div>

          <button className="send-btn d-flex justify-content-center">
            Send

          </button>
          
        </div>

      </section>
    </div>
  );
}
