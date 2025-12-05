import React from 'react';

function Maps({ data }) {
    return (
        <section id="maps" className="maps-section">
            <div className="section-header">
                <h2 className="section-title">🗺️ Popular Destinations</h2>
                <p className="section-subtitle">Discover our most loved travel destinations in Ramanathapuram</p>
            </div>

            <div className="destinations-grid">
                {data.destinations.map(dest => (
                    <div key={dest.id} className="destination-card">
                        <div className="destination-image-wrapper">
                            <img src={dest.image} alt={dest.name} className="destination-image" />
                            <div className="destination-tours-badge">{dest.tours} Tours</div>
                        </div>

                        <div className="destination-content">
                            <h3 className="destination-name">{dest.name}</h3>
                            <p className="destination-coordinates">🧭 {dest.coordinates}</p>
                            <p className="destination-description">{dest.description}</p>
                            <button className="destination-btn">Explore Destination →</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Maps;
