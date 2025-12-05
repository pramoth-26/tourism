import React from 'react';

function About({ data }) {
    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title">ℹ️ About Us</h2>
                <p className="section-subtitle">{data.aboutUs.description}</p>
            </div>

            <div className="about-content">
                {/* Mission Statement */}
                <div className="mission-box">
                    <h3>Our Mission</h3>
                    <p>{data.aboutUs.mission}</p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {data.aboutUs.features.map((feature, idx) => (
                        <div key={idx} className="feature-box">
                            <div className="feature-icon-large">{feature.icon}</div>
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default About;
