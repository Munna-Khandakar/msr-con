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
              <div>
                <div className="marketing-manager">
                  <img className='logo' src='/assets/img-job-entry/com-logo-2.jpg' alt="" style={{ width: '80px', height: '80px' }} />
                  <div className=" text-start ps-4">
                    <h3 className="manager-title">Study in Australia</h3>
                  </div>
                </div>
  
                <div className="description-container">
                  <p>Bangladesh is assessed as Level 2 country in Australia which meansless documentation is required to apply. 
                    Now the visa success rate is very high for Bangladesh. 
                    If you wish to apply in Australia, please do not waste time
                  </p>
                  <h4 className="job-responsibility">PROCESS TO APPLY</h4>
                  <p>Applying is very easy. You just need to follow the following steps</p>
                  <ul className="list-unstyled">
                  <li> <FaAngleRight className="react-icon" />
                  STEP 1- Offer Letter (Time Required - 14 days): Choose the study program (You must have a valid IELTS result, required previous study, Explained GAP period if any, Financial Evidence, and a good SOP to meet the GTE requirements )
</li>
                    <li><FaAngleRight className="react-icon" />STEP 2 - COE (Time Required - 3-7 days):
Pay your tuition fees and insurance fees
(Once you sign the offer, pay your tuition fees to receive the Confirmation of Enrolment)</li>
                    <li><FaAngleRight className="react-icon" />STEP 3 - Visa Application (Time Required - 1 or 2 days):
Submit your visa application and book an appointment for Biometric and medical examination
(Once you receive the COE, apply through the Immigration website. You need to do Biometric and Medical test. Include all evidence accordingly. You need to write a good Statement of Purpose (SOP).</li>
<li><FaAngleRight className="react-icon" />STEP 4 - Visa Decision (Time Required - 17 to 45 days):
Usual process time is 17 days - 45 days to get a decision.</li>
                    <li><FaAngleRight className="react-icon" />STEP 5 - Fly
Book a flight, find accommodation & fly.
(We organize a per-departure session)</li>
                  </ul>
                </div>
               
                  <h4 className="form-title">Apply For Appointment</h4>
                  <JobApplicationForm />

               
              </div>
  
              <div className="summary-detail">
                <div className="summary" >
                  <h4 className="description-title">OUR SPECIALTY</h4>
                  <p><FaAngleRight className="react-icon" />Free assessment</p>
                  <p><FaAngleRight className="react-icon" />Free application</p>
                  <p><FaAngleRight className="react-icon" />No file opening & Services charge</p>
                  <p><FaAngleRight className="react-icon" />Step-by-step Sponsor & Visa Guidelines</p>
                  <p><FaAngleRight className="react-icon" />Expert & Dedicated Counselors</p>
                  <p><FaAngleRight className="react-icon" />Assist in SOP</p>
                  <p><FaAngleRight className="react-icon" />High Visa Success Rate</p>
                  <p><FaAngleRight className="react-icon" />Funds assistance with a competitive market rate</p>
                  <p><FaAngleRight className="react-icon" />Accommodation assistance including airport pick up</p>
                </div>
                <div className="detail" >
                  <h4 className="description-title">OUR STATEMENT</h4>
                  <p>
                  We are a trusted partner of prominent educational institutions in Australia & Canada
We assist students genuinely to study High School Programs (Year 11 & Year 12), Vocational Studies, Bachelor Studies, Master's & Research Programs in Australia & Canada.
                  </p>
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
