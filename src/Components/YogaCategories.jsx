import React from 'react';
import '../Yogacss/YogaCategories.css'; // Add this line to include the CSS

function YogaCategories() {
  return (
    <section class="inspired-section">
      <div class="text-container">
        <h2>Inspired Articles</h2>
        <p>
          Modern postural yoga consists largely but not exclusively of the practice of asanas. 
          There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles.
        </p>

        <ul>
          <li>Meditation</li>
          <li>Anatomy</li>
          <li>Yoga Poses</li>
          <li>Yin Poses</li>
          <li>Yoga Therapy</li>
          <li>Remedies</li>
          <li>Seasonal Tips</li>
          <li>Recipes</li>

        </ul>
      </div>

      <div class="inspired-image">
        <img src="https://img.freepik.com/free-photo/woman-digital-disconnecting-home-by-doing-yoga_23-2150037473.jpg?t=st=1746066650~exp=1746070250~hmac=bbc923a3da1a429baddf460d24a07f2ada5a444ee4a2091a464ea03c06e07707&w=1380" alt="Inspired Yoga" />
      </div>
    </section>
  );
}

export default YogaCategories;
