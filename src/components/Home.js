import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you create/update this file with the CSS below

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Discover Himachal Pradesh</h1>
            <p>
              Embark on an unforgettable journey through majestic hills, vibrant culture, and serene landscapes.
              Your adventure starts here!
            </p>
            <Link to="/destinations" className="btn btn-primary">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-card">
            <img src="https://www.shutterstock.com/image-photo/spectacular-sunrise-over-scenic-landscape-260nw-2458744877.jpg" alt="Scenic Landscape" />
            <h3>Stunning Landscapes</h3>
            <p>Experience the pristine beauty of mountain vistas, cascading waterfalls, and lush valleys.</p>
          </div>
          <div className="info-card">
            <img src="https://hinduvism.com/wp-content/uploads/2024/10/Untitled-design-2024-10-23T150617.783-1068x610.jpg" alt="Cultural Heritage" />
            <h3>Cultural Heritage</h3>
            <p>Immerse in local festivals, ancient temples, and traditional arts that breathe life into history.</p>
          </div>
          <div className="info-card">
            <img src="https://static2.tripoto.com/media/filter/nl/img/563652/TripDocument/1539748873_ocean2sky_770x430.jpg" alt="Thrilling Adventures" />
            <h3>Thrilling Adventures</h3>
            <p>From trekking and paragliding to camping under a starry sky—adventure awaits at every turn.</p>
          </div>
        </div>
      </section>

      {/* Travel Information Section */}
      <section className="travel-info-section">
        <div className="container">
          <h2>Latest Travel Information</h2>
          <p>
            Stay updated with the latest travel advisories, weather updates, and local events happening in Himachal Pradesh.
          </p>
          <div className="info-grid">
            <div className="info-item">
            <img src="https://images.news18.com/ibnkhabar/uploads/2023/03/HIMACHAL-WEATHER.jpg?impolicy=website&width=640&height=480" alt="Thrilling Adventures" />
              <h3>Weather Update</h3>
              <p>Clear skies with mild temperatures—ideal for exploring the outdoors.</p>
            </div>
            <div className="info-item">
            <img src="https://tourismbharat.com/wp-content/uploads/2024/02/Shimla-Packing-List-Shimla-Himachal-Pradesh-Travel-Essentials.jpg.webp" alt="Thrilling Adventures" />
              <h3>Travel Advisory</h3>
              <p>Check local guidelines and restrictions before planning your trip.</p>
            </div>
            <div className="info-item">
            <img src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/12/Culture-of-Himachal-Pradesh.jpg?resize=1024%2C662&ssl=1" alt="Thrilling Adventures" />
              <h3>Local Events</h3>
              <p>Discover cultural festivals and markets that bring the region to life.</p>
            </div>
          </div>
          <div className="subscribe">
            <h3>Subscribe for Updates</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
