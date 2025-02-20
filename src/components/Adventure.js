import React, { useState } from 'react';
import './Adventure.css';

function Adventure() {
  const [filter, setFilter] = useState('all');

  const adventures = [
    {
      id: 1,
      title: 'Trekking',
      description: 'Explore rugged paths and breathtaking vistas on a trekking adventure.',
      image: 'https://www.kashmironline.com/blog/wp-content/uploads/2022/11/image-22.png',
      category: 'trekking',
    },
    {
      id: 2,
      title: 'Paragliding',
      description: 'Soar high over scenic valleys and feel the rush of wind as you glide.',
      image: 'https://static.wixstatic.com/media/a56ba3_0358a154c5ca48e68fe7b9431f4eea87~mv2.jpeg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a56ba3_0358a154c5ca48e68fe7b9431f4eea87~mv2.jpeg',
      category: 'paragliding',
    },
    {
      id: 3,
      title: 'River Rafting',
      description: 'Conquer rapid rivers and embrace the adrenaline-pumping thrills of rafting.',
      image: 'https://www.treksandtrails.org/system/images/000/187/820/63c6afc2b748d1416870817ff941108d/x1000gt/0dc42b7a7ea6418291f5288caad9abe5.jpg?1560621944',
      category: 'rafting',
    },
    {
      id: 4,
      title: 'Camping',
      description: 'Spend nights under starry skies with our curated camping experiences.',
      image: 'https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/16:9/w_1600,c_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg',
      category: 'camping',
    },
  ];

  const filteredAdventures =
    filter === 'all'
      ? adventures
      : adventures.filter((adv) => adv.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="adventure-hero">
        <div className="adventure-overlay">
          <div className="adventure-hero-content">
            <h1>Adventure Activities</h1>
            <p>
              Embrace the thrill of exploring the wild side of Himachal Pradesh. Whether it’s trekking through rugged paths or soaring high with paragliding, your adventure awaits!
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="adventure-filter">
        <div className="container">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All
          </button>
          <button className={`filter-btn ${filter === 'trekking' ? 'active' : ''}`} onClick={() => setFilter('trekking')}>
            Trekking
          </button>
          <button className={`filter-btn ${filter === 'paragliding' ? 'active' : ''}`} onClick={() => setFilter('paragliding')}>
            Paragliding
          </button>
          <button className={`filter-btn ${filter === 'rafting' ? 'active' : ''}`} onClick={() => setFilter('rafting')}>
            River Rafting
          </button>
          <button className={`filter-btn ${filter === 'camping' ? 'active' : ''}`} onClick={() => setFilter('camping')}>
            Camping
          </button>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="adventure-grid-section">
        <div className="container grid">
          {filteredAdventures.map((adv) => (
            <div key={adv.id} className="adventure-card">
              <img src={adv.image} alt={adv.title} />
              <div className="adventure-card-content">
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="adventure-cta">
        <div className="container">
          <h2>Ready for Your Next Adventure?</h2>
          <p>
            Join our community of thrill-seekers and start planning your next adventure today. Exclusive deals and insider tips await!
          </p>
          <button className="btn btn-secondary">Book Now</button>
        </div>
      </section>
    </>
  );
}

export default Adventure;
