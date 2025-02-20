import React from 'react';
import './TravelTips.css';

function TravelTips() {
  return (
    <>
      {/* Hero Section */}
      <section className="traveltips-hero">
        <div className="traveltips-overlay">
          <div className="traveltips-hero-content">
            <h1>Travel Tips & Resources</h1>
            <p>
              Plan your visit effortlessly with our curated tips and insights for a seamless journey.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Content Section */}
      <section className="traveltips-content">
        <div className="container">
          <h2>Essential Travel Advice</h2>
          <p>
            Discover practical tips on the best time to travel, transportation options, accommodations, local culture, and more.
          </p>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Best Time to Travel</h3>
              <p>Find out when to visit Himachal Pradesh for ideal weather and fewer crowds.</p>
            </div>
            <div className="tip-card">
              <h3>Transportation Options</h3>
              <p>Learn about local buses, taxis, and rental services to get around with ease.</p>
            </div>
            <div className="tip-card">
              <h3>Accommodation Tips</h3>
              <p>From cozy cottages to boutique hotels, get recommendations that suit every budget.</p>
            </div>
            <div className="tip-card">
              <h3>Packing Essentials</h3>
              <p>Discover what to pack for comfort and convenience during your trip.</p>
            </div>
            <div className="tip-card">
              <h3>Local Etiquette</h3>
              <p>Understand cultural norms to ensure a respectful and enriching experience.</p>
            </div>
            <div className="tip-card">
              <h3>Budget Travel</h3>
              <p>Get smart tips on how to enjoy your journey without breaking the bank.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Subscription Section */}
      <section className="traveltips-resources">
        <div className="container">
          <h2>Additional Resources</h2>
          <p>
            Access our travel guides, interactive maps, and itinerary planners to plan every aspect of your journey.
          </p>
          <div className="resources-grid">
            <div className="resource-card">
              <img src="https://www.akkcrusier.com/blog/wp-content/uploads/2024/01/Places-to-Visit-in-Himachal-Pradesh.jpg" alt="Travel Guide" />
              <h3>Travel Guide</h3>
              <p>Download our complete guide to explore Himachal Pradesh.</p>
            </div>
            <div className="resource-card">
              <img src="https://www.traveldealsfinder.com/wp-content/uploads/2012/09/himachal-tourist-circuit-ma.jpg" alt="Interactive Map" />
              <h3>Interactive Map</h3>
              <p>Navigate with ease using our detailed map of attractions and routes.</p>
            </div>
            <div className="resource-card">
              <img src="https://i0.wp.com/www.etaxigo.com/blog/wp-content/uploads/2020/04/Himachal-Pradesh-Tourism.jpg?w=900&ssl=1" alt="Itinerary Planner" />
              <h3>Itinerary Planner</h3>
              <p>Create and customize your travel itinerary effortlessly.</p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="subscribe-section">
            <h2>Subscribe for More Tips</h2>
            <p>
              Join our community and receive the latest travel tips and exclusive offers directly in your inbox.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelTips;
