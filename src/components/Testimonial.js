// Testimonial.js

import React from 'react';
import FooterLinks from './FooterLinks';

const Testimonial = () => {
  return (
    <div>
      {/* Testimonial Section */}
      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </p>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              {/* Audio Player */}
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <img src="/circle_logo.png" className="img-fluid" alt="Circle Logo" style={{ width: '50px', height: '50px' }} />
                  <div className="text-center">
                    <small>Voice</small>
                  </div>
                </div>
                <div>
                  {/* Insert your audio player component here */}
                  {/* Example placeholder */}
                  <audio controls>
                    <source src="audio_file.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              <div className="text-center">
                <img src="/bigger_logo.png" className="img-fluid" alt="Bigger Logo" style={{ width: '100px', height: '100px' }} />
                <p>Shubha Nagarajan</p>
                <p>Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* New Section */}
<div
        className="bg-light new-section" // Added a specific class
        style={{ padding: '100px 0px', textAlign: 'center' }}
      >
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins', fontSize: '36px', fontStyle: 'italic', fontWeight: 500, lineHeight: '54px', textAlign: 'left' }}>
            Your Hobby, Your Community...
          </h2>
          <button className="btn btn-primary btn-lg mt-3">Get Started</button>
        </div>
        <div className="mt-4">
          <img src="/Group2.svg" className="img-fluid" alt="Your Logo" />
        </div>
      </div>
      <FooterLinks />
    </div>
  );
};

export default Testimonial;
