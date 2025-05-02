import React from 'react';
import '../Yogacss/Email.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // This should work after installation

function Email() {
  return (
    <div className="email-wrapper">
      <div className="email-container">
        <div className="email-content">
          <img
            src="https://cdn-icons-png.freepik.com/256/1324/1324120.png?semt=ais_hybrid"
            alt="Newsletter Icon"
            className="email-icon"
          />
          <h2 className="email-title">Subscribe to our newsletter</h2>
          <p className="email-text">Get updates for new classes and new products</p>

          <div className="form-group">
            <button className="icon-button">
              <i className="fas fa-paper-plane"></i>
            </button>
            <input
              type="email"
              placeholder="Your Email address"
              className="email-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        <div className="email-image">
          <img
            src="https://cdn.yogajournal.com/wp-content/uploads/2021/11/Chaturanga-Pose_Andrew-Clark_2400x1350-e1671220290268.jpeg?width=730"
            alt="Yoga theme"
            className="email-image-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Email;
