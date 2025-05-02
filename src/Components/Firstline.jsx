import React from 'react';
import '../Yogacss/Firstline.css'; // Import the CSS file

function Firstline() {
  return (
    <div className="firstline-container">
      <div className="text-section">
        <h1>Online</h1>
        <h2>Yoga Classes</h2>
        <p>
          Yoga is the most popular online class, trusted <br />by 100,000+ customers.
          Our instructors are well- <br />known and certified.
        </p>
        <button className="browse-button">Browse Course</button>
      </div>
      <div className="image-section">
        <img
          src="https://media.istockphoto.com/id/1076946698/photo/young-sporty-woman-practicing-yoga-doing-upward-facing-dog-exercise.jpg?s=612x612&w=0&k=20&c=l93Nl8oY0Kg2IaXCJ1hMTw0rlI8Dg9fQqtvPT1Vgf5w="
          alt="Woman practicing yoga"
        />
      </div>
    </div>
  );
}

export default Firstline;
