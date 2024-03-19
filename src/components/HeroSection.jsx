import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
      style={{ backgroundImage: "url('./assets/images/hero-bg.svg')" }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">
            The Best Program to <span className="span">Enroll</span> for Abroad
          </h1>
          <p className="hero-text">
            We are a trusted partner of prominent educational institutions of Australia, Canada, UK, USA & Europe.
          </p>
          <a
            href="https://www.applyboard.com/partners/156536/intake-form?fbclid=IwAR1QwYAqHZj4vs54tUDgaLGcnJx2wI2_ignkKGS1WV8cQFqzPCFq3CgH5dM"
            className="btn has-before"
            target="_blank"
            // style={{width:"200px"}}
            rel="noreferrer"
          >
            <span className="span" style={{maxWidth:"100%"}}>Free assessment</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
        </div>
        <figure className="hero-banner">
          <div className="img-holder one" style={{ "--width": "270", "--height": "300" }}>
            <img
              src="./assets/images/hero-banner-1.jpg"
              width="270"
              height="300"
              alt="hero banner"
              className="img-cover"
            />
          </div>
          <div className="img-holder two" style={{ "--width": "240", "--height": "370" }}>
            <img
              src="./assets/images/hero-banner-2.jpg"
              width="240"
              height="370"
              alt="hero banner"
              className="img-cover"
            />
          </div>
          <img
            src="./assets/images/hero-shape-1.svg"
            width="380"
            height="190"
            alt=""
            className="shape hero-shape-1"
          />
          <img
            src="./assets/images/hero-shape-2.png"
            width="622"
            height="551"
            alt=""
            className="shape hero-shape-2"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
