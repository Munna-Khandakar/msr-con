import React from 'react';
const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="/" className="logo">
          <img
            src="./assets/images/logo.svg"
            width="162"
            height="50"
            alt="EduWeb logo"
          />
        </a>

        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <a href="/" className="logo">
              <img
                src="./assets/images/logo.svg"
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </a>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="#courses" className="navbar-link" data-nav-link>
                Courses
              </a>
            </li>

            <li className="navbar-item">
              <a href="#blog" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href="https://www.applyboard.com/partners/156536/intake-form?fbclid=IwAR1QwYAqHZj4vs54tUDgaLGcnJx2wI2_ignkKGS1WV8cQFqzPCFq3CgH5dM"
            className="btn has-before"
            target="_blank"
            rel="noreferrer"
          >
            <span className="span">Free assessment</span>
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
