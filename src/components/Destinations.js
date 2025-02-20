import React from 'react';
import './Destinations.css';

function Destinations() {
  return (
    <>
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="destinations-overlay">
          <div className="destinations-content">
            <h1>Explore Destinations & Itineraries</h1>
            <p>Discover the magic of Himachal Pradesh with our curated travel experiences.</p>
          </div>
        </div>
      </section>

      {/* Featured Destinations Carousel */}
      <section className="carousel-section">
        <div className="container">
          <h2>Featured Destinations</h2>
          <div className="carousel">
            <div className="carousel-item">
              <img src="https://shooliniuniversity.com/blog/wp-content/uploads/2024/07/The-Ridge-Shimla-1.jpg" alt="Shimla" />
              <div className="carousel-caption">
                <h3>Shimla</h3>
                <p>Colonial charm & vibrant culture.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://storage.googleapis.com/stateless-www-justwravel-com/2024/09/dd5f41a7-places-to-visit-in-manali--810x528.png" alt="Manali" />
              <div className="carousel-caption">
                <h3>Manali</h3>
                <p>Adventure in the mountains.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://s7ap1.scene7.com/is/image/incredibleindia/dharamshala-cricket-stadium-dharamshala-himachal-pradesh-city-1-hero?qlt=82&ts=1726731052960" alt="Dharamshala" />
              <div className="carousel-caption">
                <h3>Dharamshala</h3>
                <p>Spiritual retreats & serene vibes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="destinations-section">
        <div className="container">
          <div className="destination-card">
            <img src="https://i0.wp.com/jannattravelguru.com/wp-content/uploads/2023/03/Rohtang-pass.jpg?resize=1024%2C660&ssl=1" alt="Rohtang Pass" />
            <h3>Rohtang Pass</h3>
            <p>Experience breathtaking landscapes and exhilarating adventures.</p>
          </div>
          <div className="destination-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b2/79/37/solang-valley-manali.jpg?w=1000&h=-1&s=1" alt="Solang Valley" />
            <h3>Solang Valley</h3>
            <p>Thrill-seekers and nature lovers unite.</p>
          </div>
          <div className="destination-card">
            <img src="https://viacation.com/wp-content/uploads/2025/01/493029-1.webp" alt="Bir Billing" />
            <h3>Bir Billing</h3>
            <p>Paragliding adventures amidst stunning vistas.</p>
          </div>
          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9s30jjwmghRWuFrntEhCMITFvabAffdSbKnO9UCtgEtB1NjT9DwudJJyK7IgSlvmWoE&usqp=CAU" alt="Khajjiar" />
            <h3>Khajjiar</h3>
            <p>"Mini Switzerland" known for its picturesque beauty.</p>
          </div>
        </div>
      </section>

      {/* Featured Itinerary Section */}
      <section className="featured-itinerary-section">
        <div className="container">
          <h2>Featured Itinerary</h2>
          <p>Embark on a 7-day journey through the best of Himachal Pradesh.</p>
          <div className="itinerary-details">
            <div className="itinerary-video">
              <iframe
                width="560"
                height="315"
                src="https://youtu.be/Lr2Xur5I-NU?si=Sg3GkGVGpmYl5u_N"
                title="Featured Itinerary Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="itinerary-info">
              <ul>
                <li><strong>Day 1:</strong> Arrival in Shimla</li>
                <li><strong>Day 2:</strong> Explore Shimla’s heritage sites</li>
                <li><strong>Day 3:</strong> Journey to Manali</li>
                <li><strong>Day 4:</strong> Adventure activities in Manali</li>
                <li><strong>Day 5:</strong> Visit Dharamshala</li>
                <li><strong>Day 6:</strong> Immerse in local culture and cuisine</li>
                <li><strong>Day 7:</strong> Departure with cherished memories</li>
              </ul>
              <button className="btn btn-primary">Plan Your Trip</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Traveler Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"An unforgettable journey through nature and culture. Highly recommended!"</p>
              <h4>- Alex</h4>
            </div>
            <div className="testimonial-card">
              <p>"The itineraries were well-planned and the destinations were stunning."</p>
              <h4>- Priya</h4>
            </div>
            <div className="testimonial-card">
              <p>"A perfect blend of adventure and relaxation. Loved every moment!"</p>
              <h4>- Rohan</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations;
