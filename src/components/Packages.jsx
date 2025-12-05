import React, { useState } from 'react';

function Packages({ data }) {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare email content
        const subject = `Package Booking: ${selectedPackage.name}`;
        const body = `Package Booking Request

Package Details:
- Package Name: ${selectedPackage.name}
- Price: ${selectedPackage.price}
- Duration: ${selectedPackage.duration}

Customer Details:
- Name: ${formData.name}
- Mobile: ${formData.mobile}
- Email: ${formData.email}

Features Included:
${selectedPackage.features.map(f => `- ${f}`).join('\n')}`;

        // Create mailto link
        const mailtoLink = `mailto:ksamsbnp1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form and close modal
        setFormData({ name: '', mobile: '', email: '' });
        setSelectedPackage(null);
    };

    return (
        <section id="packages" className="packages-section">
            <div className="section-header">
                <h2 className="section-title">📦 Tour Packages</h2>
                <p className="section-subtitle">Choose the perfect package for your pilgrimage</p>
            </div>

            <div className="packages-grid">
                {data.packages.map(pkg => (
                    <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                        {pkg.popular && <div className="popular-badge">⭐ Most Popular</div>}

                        <div className="package-header">
                            <h3 className="package-name">{pkg.name}</h3>
                            <div className="package-price">{pkg.price}</div>
                            <p className="package-duration">{pkg.duration}</p>
                        </div>

                        <div className="package-features">
                            {pkg.features.map((feature, idx) => (
                                <div key={idx} className="package-feature">
                                    <span className="feature-icon">✓</span>
                                    <span className="feature-text">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            className="package-btn"
                            onClick={() => setSelectedPackage(pkg)}
                        >
                            Select Package
                        </button>
                    </div>
                ))}
            </div>

            {/* Package Booking Modal */}
            {selectedPackage && (
                <div className="modal-overlay" onClick={() => setSelectedPackage(null)}>
                    <div className="modal-content package-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedPackage(null)}>×</button>

                        <h2 className="modal-title">Book {selectedPackage.name}</h2>
                        <p className="modal-subtitle">Fill in your details to proceed</p>

                        <form className="package-booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile">Mobile Number *</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    className="form-input"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="package-summary">
                                <h4>Package Summary:</h4>
                                <p><strong>Price:</strong> {selectedPackage.price}</p>
                                <p><strong>Duration:</strong> {selectedPackage.duration}</p>
                            </div>

                            <button type="submit" className="form-submit-btn">
                                Send Booking Request 📧
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Packages;
