import React from 'react';
import Image from 'next/image'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
        <Image
            src="/assets/HobbyCueLogo.svg"
            alt="Logo"
            width={293.26}
            height={60}
            style={{ top: '10px', left: '97px', gap: '0px', opacity: '0px' }} // Inline styles for position and size
          />
        </a>

        

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Explore Hobbies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Saved</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Notifications <i className="bi bi-bell"></i></a> {/* Replace with bell icon */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart <i className="bi bi-cart"></i></a> {/* Replace with cart icon */}
            </li>
          </ul>
          <button className="btn btn-outline-primary me-2">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
