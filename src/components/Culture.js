import React from 'react';
import './Culture.css';

function Culture() {
  return (
    <>
      {/* Hero Section */}
      <section className="culture-hero">
        <div className="culture-overlay">
          <div className="culture-hero-content">
            <h1>Cultural Experiences</h1>
            <p>
              Dive into a world of ancient temples, vibrant festivals, exquisite handicrafts, and culinary delights that tell the story of Himachal’s rich cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Gallery Section */}
      <section className="culture-gallery">
        <div className="container">
          <h2>Explore Cultural Highlights</h2>
          <div className="culture-grid">
            <div className="culture-card">
              <img src="https://himstate.in/wp-content/uploads/2024/07/Top-10-Temples-Himachal--1024x576.png" alt="Ancient Temples" />
              <h3>Ancient Temples</h3>
              <p>Discover sacred sites and timeless architecture that whisper tales of the past.</p>
            </div>
            <div className="culture-card">
              <img src="https://www.holidayinhimachal.com/wp-content/uploads/2024/03/pori-festival-in-himachal-pradesh-a-celebration-of-culture-and-traditions-768x576.png" alt="Local Festivals" />
              <h3>Local Festivals</h3>
              <p>Experience the vibrant energy and traditions of local celebrations.</p>
            </div>
            <div className="culture-card">
              <img src="https://i.pinimg.com/736x/5e/5d/26/5e5d2656cdf129383578bb3f8b7ff130.jpg" alt="Handicrafts" />
              <h3>Handicrafts</h3>
              <p>Admire the exquisite craftsmanship and unique art forms of local artisans.</p>
            </div>
            <div className="culture-card">
              <img src="https://himachalstay.in/wp-content/uploads/2023/07/Food-of-Himachal-Pradesh-1.jpg" alt="Culinary Delights" />
              <h3>Culinary Delights</h3>
              <p>Savor traditional flavors and recipes that have been perfected over generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="culture-cta">
        <div className="container">
          <h2>Immerse Yourself in Culture</h2>
          <p>
            Every corner of Himachal holds a story waiting to be explored. Join us on a journey to uncover the vibrant cultural heritage of this enchanting land.
          </p>
          <button className="btn btn-primary">Discover More</button>
        </div>
      </section>
    </>
  );
}

export default Culture;
