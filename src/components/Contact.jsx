import React, { useState } from 'react';

function Contact({ data }) {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const whatsappMessage = `*New Tour Inquiry*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;

        // WhatsApp number to send to (80152 23596)
        const whatsappNumber = '918015223596';

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

        // Reset form
        setFormData({
            name: '',
            mobile: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title">📞 Contact Us</h2>
                <p className="section-subtitle">{data.contact.subtitle}</p>
            </div>

            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <div className="contact-card">
                        <div className="contact-icon">📧</div>
                        <h4>Email</h4>
                        <p>{data.contact.email}</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📱</div>
                        <h4>Phone</h4>
                        <p>{data.contact.phone}</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <h4>Address</h4>
                        <p>{data.contact.address}</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">🕐</div>
                        <h4>Business Hours</h4>
                        <p>{data.contact.hours.weekday}</p>
                        <p>{data.contact.hours.weekend}</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-wrapper">
                    <h3>Send us a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                className="form-input"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="form-input"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="form-submit-btn">Send via WhatsApp 💬</button>
                    </form>

                    {/* Social Media */}
                    {/* <div className="social-media-section">
                        <h4>Follow Us</h4>
                        <div className="social-media-links">
                            {data.contact.socialMedia.map((social, idx) => (
                                <a key={idx} href={social.url} className="social-media-btn">
                                    <span>{social.icon}</span>
                                    <span>{social.platform}</span>
                                </a>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;

