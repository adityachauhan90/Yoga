import React from 'react';
import '../Yogacss/Logoline.css'; // Make sure this CSS file exists and matches your path

function Logoline() {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>We are featured in</h2>
      </div>

      <div className="featured-logos">
        <img
          src="https://img.freepik.com/premium-vector/black-nature-creative-human-body-meditation-yoga-logo-white-background_1188140-1784.jpg"
          alt="Logo 1"
        />
        <img
          src="https://img.freepik.com/premium-vector/black-white-logo-yoga-studio_1145966-1012.jpg"
          alt="Logo 2"
        />
        <img
          src="https://img.freepik.com/free-vector/aesthetic-business-logo-template-creative-professional-design-vector_53876-136290.jpg?semt=ais_hybrid&w=740"
          alt="Logo 3"
        />
        <img
          src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjI4Ni1hZXctMDgwLWhlYWx0aC1sb2dvXzIuanBn.jpg"
          alt="Logo 4"
        />
        <img
          src="https://matthatfieldart.com/wp-content/uploads/2019/11/mandela-yoga-logo-om-symbol-2.png"
          alt="Logo 5"
        />
      </div>
    </section>
  );
}

export default Logoline;
