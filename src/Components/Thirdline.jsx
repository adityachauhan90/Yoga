import React from 'react';
import '../Yogacss/Thirdline.css';

function Thirdline() {
  return (
    <section className="thirdline-container">
      <div className="text-section">
        <h1>Popular Online Classes</h1>
        <p>
          A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release
          any suffering, find inner peace and salvation.
        </p>
        <button className="browse-button">Browse All Classes</button>
      </div>

      <div className="image-section">
        <div className="icon-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
            alt="Person meditating icon"
          />
        </div>
        <div className="arrow-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109617.png"
            alt="Right arrow icon"
          />
        </div>
      </div>
    </section>
  );
}

export default Thirdline;
