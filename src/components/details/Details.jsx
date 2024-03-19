import './Details.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {  FaAngleRight, FaArrowUp} from 'react-icons/fa'; // Font Awesome icons
import JobApplicationForm from './JobApplicationForm';


function JobDetail() {
    const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show back to top button when user scrolls down more than 100px
    if (window.scrollY > 100) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }

    // Show fixed header after scrolling more than 200px
    if (window.scrollY > 120) {
      setTimeout(() => setShowFixedHeader(true), 500);
    } else {
      setShowFixedHeader(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
      <div className='parent-container'> 
      <div className={`header-container ${showFixedHeader ? 'fixed-header' : ''}`}>
        <Header />
      </div>
        <div className="body-container">
        <div className='hero-img-container'>
           <img className='hero-img' src="/assets/img-job-entry/carousel-1.jpg" alt="" />
        </div>

        {/* Job Detail Start */}
          <div className="container">
            <div className="detail-body">
              <div className="">
                <div className="marketing-manager">
                  <img className='logo' src='/assets/img-job-entry/com-logo-2.jpg' alt="" style={{ width: '80px', height: '80px' }} />
                  <div className=" text-start ps-4">
                    <h3 className="manager-title">Study in Australia</h3>
                  </div>
                </div>
  
                <div className="description-container">
                  <h4 className="description-title">Job description</h4>
                  <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
                  <h4 className="job-responsibility">Responsibility</h4>
                  <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                  <ul className="list-unstyled">
                  <li> <FaAngleRight className="react-icon" />lor justo tempor duo ipsum accusam</li>
                    <li><FaAngleRight className="react-icon" />Elitr stet dolor vero clita labore gubergren</li>
                    <li><FaAngleRight className="react-icon" />Rebum vero dolores dolores elitr</li>
                    <li> <FaAngleRight className="react-icon" />Est voluptua et sanctus at sanctus erat</li>
                    <li> <FaAngleRight className="react-icon" />Diam diam stet erat no est est</li>
                  </ul>
                  <h4 className="description-title">Qualifications</h4>
                  <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                  <ul className="list-unstyled">
                    <li><FaAngleRight className="react-icon" />Dolor justo tempor duo ipsum accusam</li>
                    <li><FaAngleRight className="react-icon" />Elitr stet dolor vero clita labore gubergren</li>
                    <li><FaAngleRight className="react-icon" />Rebum vero dolores dolores elitr</li>
                    <li> <FaAngleRight className="react-icon" />Est voluptua et sanctus at sanctus erat</li>
                    <li> <FaAngleRight className="react-icon" />Diam diam stet erat no est est</li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="form-title">Apply For The Job</h4>
                  <JobApplicationForm />

                </div>
              </div>
  
              <div className="summary-detail">
                <div className="summary" >
                  <h4 className="description-title">Job Summery</h4>
                  <p><FaAngleRight className="react-icon" />Published On: 01 Jan, 2045</p>
                  <p><FaAngleRight className="react-icon" />Vacancy: 123 Position</p>
                  <p><FaAngleRight className="react-icon" />Job Nature: Full Time</p>
                  <p><FaAngleRight className="react-icon" />Salary: $123 - $456</p>
                  <p><FaAngleRight className="react-icon" />Location: New York, USA</p>
                  <p><FaAngleRight className="react-icon" />Date Line: 01 Jan, 2045</p>
                </div>
                <div className="detail" >
                  <h4 className="description-title">Company Detail</h4>
                  <p>Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                </div>
              </div>
            </div>
          </div>
        {/* Job Detail End */}
  
        {/* Back to Top */}
        {showBackToTop && (
          <button  className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>
      <Footer />
      </div>
    );
}

export default JobDetail;
