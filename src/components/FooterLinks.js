// FooterLinks.js

import React from 'react';

const FooterLinks = () => {
  return (
    <div className="bg-light" style={{ background: '#F7F5F9', padding: '50px 0', textAlign: 'center' }}>
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3">
            <h3>Hubby Cue</h3>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Service</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="col-md-3">
            <h3>How do I</h3>
            <ul className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Flag Post</li>
              <li>Other Queries</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li>Listings</li>
              <li>Blog Post</li>
              <li>Shop/Store</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <h3>Social Media</h3>
            {/* Replace with actual social media icons or links */}
            <ul className="list-unstyled">
              <li>Social Media Icons</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="row mt-4">
          <div className="col-md-12">
            <p>© Purple Cues Private Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
