import React from 'react';

function Hero({ data }) {
    return (
        <header className="hero">
            <div className="hero-content">
                <h1 className="hero-title">{data.title}</h1>
                <p className="hero-subtitle">{data.subtitle}</p>

                {/* Statistics */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.totalTours}+</div>
                        <div className="stat-label">Tour Packages</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.happyCustomers}</div>
                        <div className="stat-label">Happy Customers</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.countries}+</div>
                        <div className="stat-label">Countries</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{data.statistics.yearsExperience}+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
