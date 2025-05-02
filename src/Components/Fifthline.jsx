import React from 'react';
import '../Yogacss/Fifthline.css';

function Fifthline() {
  return (
    <section className="fifthline">
      <div className="fifthline-container">
        {/* Left image section */}
        <div className="fifthline-image">
          <img
            src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg"
            alt="Modern Yoga"
          />
        </div>

        {/* Right text section */}
        <div className="fifthline-text">
          <h5>Our foundation is</h5>
          <h3>Modern Yoga</h3>
          <p>
            Modern postural yoga consists largely but not exclusively of the practice of asanas.
            There were very few standing asanas before 1900. By 2012, there were at least 19
            widespread styles from Ashtanga Yoga to Viniyoga. These emphasize different aspects
            including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga
            tradition. For example, Bikram Yoga has an aerobic exercise style with rooms heated to
            105°F.
          </p>

          <div className="fifthline-buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-outline">Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fifthline;
