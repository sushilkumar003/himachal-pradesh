import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  // Sample images with categories
  const images = [
    { id: 1, src: 'https://myholidayhappiness.com/uploads/himachal-pradesh-6784.jpg', alt: 'Majestic Mountains', category: 'nature', title: 'Majestic Mountains' },
    { id: 2, src: 'https://www.ehimachal.org/wp-content/uploads/2023/01/home-banner.jpg', alt: 'Cultural Festivities', category: 'culture', title: 'Cultural Festivities' },
    { id: 3, src: 'https://www.honeymoonbug.com/blog/wp-content/uploads/2022/12/manali.jpg', alt: 'Adventure Trail', category: 'adventure', title: 'Adventure Trail' },
    { id: 4, src: 'https://images.nativeplanet.com/webp/img/2014/12/03-lhpcol1.jpg', alt: 'Serene Lakes', category: 'nature', title: 'Serene Lakes' },
    { id: 5, src: 'https://c7.alamy.com/comp/M5FNJD/handicrafts-shop-kangra-himachal-pradesh-india-asia-M5FNJD.jpg', alt: 'Local Crafts', category: 'culture', title: 'Local Crafts' },
  ];

  const [filter, setFilter] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const filteredImages = filter === 'all' ? images : images.filter(image => image.category === filter);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <div className="gallery-hero-content">
            <h1>Visual Gallery</h1>
            <p>Experience the beauty of Himachal Pradesh through stunning visuals.</p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="gallery-filters">
        <div className="container">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'nature' ? 'active' : ''}`} onClick={() => setFilter('nature')}>Nature</button>
          <button className={`filter-btn ${filter === 'culture' ? 'active' : ''}`} onClick={() => setFilter('culture')}>Culture</button>
          <button className={`filter-btn ${filter === 'adventure' ? 'active' : ''}`} onClick={() => setFilter('adventure')}>Adventure</button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage.src} alt={modalImage.alt} />
          <div className="modal-caption">{modalImage.title}</div>
        </div>
      )}
    </>
  );
}

export default Gallery;
