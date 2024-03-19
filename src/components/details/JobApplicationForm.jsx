import React from "react";
import "./JobApplicationForm.css";

const JobApplicationForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-body">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Portfolio Website"
              />
            </div>
            <div className="form-group">
              <input type="file" className="form-control bg-white" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Cover Letter"
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <button className="btn" type="submit">
              <span className="apply-button">Apply Now</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
