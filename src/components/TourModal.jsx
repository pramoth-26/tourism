import React from 'react';

function TourModal({ selectedTour, setSelectedTour }) {
    if (!selectedTour) return null;

    return (
        <div className="modal-overlay" onClick={() => setSelectedTour(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedTour(null)}>×</button>

                <img src={selectedTour.image} alt={selectedTour.name} className="modal-image" />

                <div className="modal-body">
                    <h2 className="modal-title">{selectedTour.name}</h2>
                    <p className="modal-location">📍 {selectedTour.location}</p>

                    <div className="modal-info">
                        <div className="info-item">
                            <span className="info-label">Duration:</span>
                            <span className="info-value">{selectedTour.duration}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Price:</span>
                            <span className="info-value">{selectedTour.price}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Rating:</span>
                            <span className="info-value">⭐ {selectedTour.rating}</span>
                        </div>
                    </div>

                    <p className="modal-description">{selectedTour.description}</p>

                    <div className="modal-highlights">
                        <h3>Tour Highlights</h3>
                        <div className="highlights-grid">
                            {selectedTour.highlights.map((highlight, idx) => (
                                <div key={idx} className="highlight-item">✓ {highlight}</div>
                            ))}
                        </div>
                    </div>

                    <a
                        href="#contact"
                        className="book-now-btn"
                        onClick={() => setSelectedTour(null)}
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TourModal;
