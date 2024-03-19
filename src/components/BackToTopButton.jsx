import React from 'react';

const BackToTopButton = () => {
  return (
    <a
      href="#top"
      className="back-top-btn"
      aria-label="back top top"
      data-back-top-btn
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  );
};

export default BackToTopButton;
