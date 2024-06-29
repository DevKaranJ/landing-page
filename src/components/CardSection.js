// CardSection.js

import React from 'react';
import Testimonial from './Testimonial'

const CardSection = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h3>People</h3>
            <p>
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button className="btn btn-primary">Connect</button>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h3>Place</h3>
            <p>
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <button className="btn btn-primary">Meet-up</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h3>Product</h3>
            <p>
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <button className="btn btn-primary">Get it</button>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h3>Program</h3>
            <p>
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button className="btn btn-primary">Attend</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card p-3" style={{ background: '#F7FDFF', height: 'auto' }}>
            <h3>Add Your Own</h3>
            <p>
              Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
            </p>
            <button className="btn btn-primary">Add Your Own</button>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default CardSection;
