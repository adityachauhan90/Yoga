import React from 'react';
import '../Yogacss/Sixthline.css'; // Assuming you will add CSS in this file

// JSON data (can also be imported from a separate file if needed)
const instructorsData = [
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GK5b0LYwuhrZWOHoSVPHRNtbCVV-nHPjfQA3XpwGHonSo7HDDL0GcRjj3E8brrB4X24&usqp=CAU",
    "name": "Mildred Reed",
    "classes": "2 Classes"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZPglpDAwydHpWbVA7qxs-sK6d1PHnb7QwYUU6FPmWZu9NoP9ZGf0-UsG4iOHDSpWXNE&usqp=CAU",
    "name": "Madison Diaz",
    "classes": "1 Class"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KY5n3kkzRCLw6HCfhdfpyl5YCmAereNEJTCKa5QmG-DG77HryqRe5rUl-hJqoDZfyys&usqp=CAU",
    "name": "Brenda Robertson",
    "classes": "1 Class"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81Sb5Z89fTcNc3dW5KzQJ3kdG2mw4p3yn-ajRXZJAvN3TeBNsDVcDDhu1iHSMmRg2BZw&usqp=CAU",
    "name": "John Doe",
    "classes": "3 Classes"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilShO-VDkGyJL_2I4O3JLuYEfeiIH1t5IQKvii8HKwHBBpvewYccaS_ZBOo2gDt_BSoo&usqp=CAU",
    "name": "Emma Johnson",
    "classes": "4 Classes"
  }
];

function Sixthline() {
  return (
    <div className="sixthline-container">
      <h1>Our Instructors</h1>
      <p>A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release any suffering, find inner peace and salvation.</p>
      <div className="instructors-gallery">
        {instructorsData.map((instructor, index) => (
          <div key={index} className="instructor">
            <img src={instructor.img} alt={`Instructor ${index + 1}`} />
            <div className="instructor-info">
              <h3>{instructor.name}</h3>
              <p>{instructor.classes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sixthline;
