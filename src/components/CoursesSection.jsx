import React from 'react';
import Link from 'react-router-dom';
import JobDetail from './details/Details';
const CoursesSection = () => {
  return (
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Popular Countries</p>
        <h2 className="h2 section-title">Pick A Country To Get Started</h2>
        <ul className="grid-list">
          <li>
            <a href="/details"> 
            <div className="course-card">
            <a href="/details"> 
              <figure className="card-banner img-holder" style={{ "--width": "370", "--height": "220" }}>
                <img
                  src="./assets/image/image.jpeg"
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="Build Responsive Real- World Websites with HTML and CSS"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <span className="badge">No Ielts</span>
                <h3 className="h3">
                  <a href="/details" className="card-title">🇦🇺 STUDY IN AUSTRALIA 🇦🇺</a>
                </h3>
                <div className="wrapper">
                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p className="rating-text">(5.0/7 Rating)</p>
                </div>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                    <span className="span">8 States</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                    <span className="span">20 University</span>
                  </li>
                </ul>
              </div>
              </a>
            </div>
            </a>
          </li>
          <li>
            <a href="/details"> 
            <div className="course-card">
              <figure className="card-banner img-holder" style={{ "--width": "370", "--height": "220" }}>
                <img
                  src="./assets/image/image.jpeg"
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="Build Responsive Real- World Websites with HTML and CSS"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <span className="badge">No Ielts</span>
                <h3 className="h3">
                  <a href="/details" className="card-title">🇦🇺 STUDY IN AUSTRALIA 🇦🇺</a>
                </h3>
                <div className="wrapper">
                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p className="rating-text">(5.0/7 Rating)</p>
                </div>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                    <span className="span">8 States</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                    <span className="span">20 University</span>
                  </li>
                </ul>
              </div>
            </div>
            </a>
          </li>
          <li>
            <a href="/details">
            <div className="course-card">
              <figure className="card-banner img-holder" style={{ "--width": "370", "--height": "220" }}>
                <img
                  src="./assets/image/image.jpeg"
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="Build Responsive Real- World Websites with HTML and CSS"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <span className="badge">No Ielts</span>
                <h3 className="h3">
                  <a href="/details" className="card-title">🇦🇺 STUDY IN AUSTRALIA 🇦🇺</a>
                </h3>
                <div className="wrapper">
                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <p className="rating-text">(5.0/7 Rating)</p>
                </div>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                    <span className="span">8 States</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                    <span className="span">20 University</span>
                  </li>
                </ul>
              </div>
            </div>
            </a>
          </li>
        </ul>
        <a href="#" className="btn has-before">
          <span className="span">Browse more courses</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default CoursesSection;
