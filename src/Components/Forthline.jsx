import React from 'react';
import '../Yogacss/Forthline.css';
import Course from '../Yogajson/Thirdline.json'

function Forthline() {
  return (
    <div className="course-container">
      {Course.map((stud, index) => (
        <div className="course-card" key={index}>
          <div className="img-wrapper">
            <img src={stud.img} alt={stud.title} />
            <div className="hover-info">
              <h5>{stud.lessons}</h5>
              <h6>{stud.students}</h6>
              <h6>{stud.yoga_type}</h6>
            </div>
          </div>
          <h2>{stud.title}</h2>
          <h5>{stud.sub_title}</h5>
          <h6>{stud.price}</h6>
        </div>
      ))}
    </div>
  );
}

export default Forthline;
