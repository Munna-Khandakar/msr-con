import React from 'react';

const AboutSection = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div className="img-holder" style={{ "--width": "520", "--height": "370" }}>
            <img
              src="./assets/images/about-banner.jpg"
              width="520"
              height="370"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />
          </div>
          <img
            src="./assets/images/about-shape-1.svg"
            width="360"
            height="420"
            loading="lazy"
            alt=""
            className="shape about-shape-1"
          />
          <img
            src="./assets/images/about-shape-2.svg"
            width="371"
            height="220"
            loading="lazy"
            alt=""
            className="shape about-shape-2"
          />
          <img
            src="./assets/images/about-shape-3.png"
            width="722"
            height="528"
            loading="lazy"
            alt=""
            className="shape about-shape-3"
          />
        </figure>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
            Over 10 Years in <span className="span">Distant learning</span> for Higher Education
          </h2>
          <p className="section-text">
            We assist students genuinely to study High School Programs (Year 11 & Year 12), Vocational Studies, Bachelor Studies, Master's & Research Programs in Australia & Canada.
          </p>
          <ul className="about-list">
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Free assessment</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Free application</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">No file opening & Services charge</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Step-by-step Sponsor & Visa Guidelines</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Expert & Dedicated Counselors</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Assist in SOP</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">High Visa Success Rate</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Funds assistance with a competitive market rate</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Accommodation assistance including airport pick up</span>
            </li>
          </ul>
          <img
            src="./assets/images/about-shape-4.svg"
            width="100"
            height="100"
            loading="lazy"
            alt=""
            className="shape about-shape-4"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
