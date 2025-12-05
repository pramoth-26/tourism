import React from 'react';

function Home({ data }) {
    return (
        <section id="home" className="home-section">
            {/* Hero Banner with Background Image */}
            <div className="home-hero">
                <div className="home-hero-overlay"></div>
                <div className="home-hero-content">
                    <h1 className="home-title">{data.title}</h1>
                    <p className="home-subtitle">{data.subtitle}</p>
                    <div className="home-cta-buttons">
                        <a href="#tours" className="cta-btn primary">Explore Tours</a>
                        <a href="#contact" className="cta-btn secondary">Plan Your Trip</a>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="home-stats">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.totalTours}+</div>
                        <div className="stat-label">Tour Packages</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.happyCustomers}</div>
                        <div className="stat-label">Happy Pilgrims</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.yearsExperience}+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support</div>
                    </div>
                </div>
            </div>

            {/* Featured Destinations with Images */}
            <div className="home-featured">
                <a href="#tours" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2 className="featured-title" style={{ cursor: 'pointer' }}>Discover Ramanathapuram</h2>
                </a>
                <p className="featured-subtitle">Sacred Temples, Pristine Beaches & Historic Landmarks</p>

                <div className="featured-grid">
                    {data.destinations.map(destination => (
                        <div key={destination.id} className="featured-card">
                            <div className="featured-image-wrapper">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="featured-image"
                                />
                                <div className="featured-overlay">
                                    <h3>{destination.name}</h3>
                                    <p>{destination.description.substring(0, 30)}...</p>
                                    <a href="#tours" className="featured-link">View Tours →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;
