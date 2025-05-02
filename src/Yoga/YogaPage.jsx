import React from "react";
import MainNavbar from "../Components/MainNavbar";
import Firstline from "../Components/Firstline";
import Secondline from "../Components/Secondline";
import Thirdline from "../Components/Thirdline";
import Forthline from "../Components/Forthline"; // Corrected capitalization for Forthline import
import Fifthline from "../Components/Fifthline";
import Sixthline from "../Components/Sixthline";
import Email from "../Components/Email";
import Footer from "../Components/Footer";
import '../Yogacss/Testimonials.css';
import TestimonialsData from '../Yogacss/Testimonials.json'
import YogaCategories from "../Components/YogaCategories";
import Logoline from "../Components/Logoline";


function YogaPage() {
  return (
    <>
      <MainNavbar />
      <Firstline />
      <Secondline />
      <Thirdline />
      <Forthline />
      <Fifthline />
      <Sixthline/>
      <Logoline/>
      <YogaCategories/>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2>Testimonial</h2>
          <h6>What people say about us</h6>

          <div className="testimonial-grid">
            {TestimonialsData.map((stud, index) => (
              <div className="testimonial-card" key={index}>
                <img src={stud.img} alt={stud.name} />
                <p>{stud.pera}</p>
                <h4>{stud.name}</h4>
                <h5>{stud.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Email/>
      <Footer/>
    </>
  );
}

export default YogaPage;
