import React from 'react';

function Gallery({ data }) {
    return (
        <section id="gallery" className="gallery-section">
            <div className="section-header">
                <h2 className="section-title">📸 Travel Gallery</h2>
                <p className="section-subtitle">Explore stunning moments from around Ramanathapuram</p>
            </div>

            <div className="gallery-grid">
                {data.gallery.map(item => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.image} alt={item.title} className="gallery-image" />
                        <div className="gallery-overlay">
                            <span className="gallery-category">{item.category}</span>
                            <h3 className="gallery-title">{item.title}</h3>
                            <p className="gallery-location">📍 {item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;
