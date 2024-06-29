import React, { useState } from 'react';
import CardSection from './CardSection';
import styles from './HeadingDetails.module.css'; // Import your CSS file if using CSS modules

const HeadingDetails = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  const handleJoinInClick = () => {
    setIsSignInActive(false);
  };

  return (
    <div className={`container mt-4 ${styles.whiteBackground}`}>
      <div className="row align-items-center">
        {/* Left Side: Images and Details */}
        <div className="col-md-6">
          <h2>
            Explore your <span className={styles.passion}>passion</span> or{' '}
            <span className={styles.hobby}>hobby</span>
          </h2>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
            <br />
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <br /> {/* Add a gap here */}
          <img
            src="/GroupLogo.svg"
            className="img-fluid"
            alt="Your Image"
          />{' '}
          {/* Ensure correct path to your SVG */}
        </div>

        {/* Right Side: Sign In and Join Options */}
        <div className="col-md-6">
          <div className="card p-3">
            <h2 className={styles.signInJoinHeader}>
              <span
                className={`${styles.signInJoinText} ${
                  isSignInActive ? styles.active : ''
                }`}
                onClick={handleSignInClick}
              >
                Sign In
              </span>{' '}
              /{' '}
              <span
                className={`${styles.signInJoinText} ${
                  !isSignInActive ? styles.active : ''
                }`}
                onClick={handleJoinInClick}
              >
                Join In
              </span>
            </h2>

            {/* Sign In Section */}
            <div
              className={`${styles.section} ${
                isSignInActive ? styles.activeSection : ''
              }`}
            >
              <button className="btn btn-outline-primary mb-3">
                Sign In with Google
              </button>
              <button className="btn btn-outline-primary mb-3">
                Sign In with Facebook
              </button>

              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                  Continue
                </button>
                <div>
                  <a href="#">Forgot password?</a>
                </div>
              </form>
            </div>

            {/* Join In Section */}
            <div
              className={`${styles.section} ${
                !isSignInActive ? styles.activeSection : ''
              }`}
            >
              <p>Password Strength Meter</p>
              <p>
                By continuing, you agree to our terms of service and policy.
              </p>
              <button className="btn btn-primary mb-3">
                Agree and Continue
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Card Section */}
        <CardSection />
        
    </div>
  );
};

export default HeadingDetails;
