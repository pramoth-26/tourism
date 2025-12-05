import React from 'react';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        <>
            {/* Sidebar Navigation */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2 className="sidebar-logo">Arasi Air Travels</h2>
                </div>

                <nav className="sidebar-nav">
                    <a href="#home" className="nav-item active" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">🏠</span>
                        <span className="nav-text">Home</span>
                    </a>
                    <a href="#tours" className="nav-item" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">✈️</span>
                        <span className="nav-text">Tours</span>
                    </a>
                    <a href="#gallery" className="nav-item" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">📸</span>
                        <span className="nav-text">Gallery</span>
                    </a>
                    <a href="#packages" className="nav-item" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">📦</span>
                        <span className="nav-text">Packages</span>
                    </a>
                    <a href="#maps" className="nav-item" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">🗺️</span>
                        <span className="nav-text">Maps</span>
                    </a>
                    <a href="#about" className="nav-item" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">ℹ️</span>
                        <span className="nav-text">About Us</span>
                    </a>
                    <a href="#contact" className="nav-item" onClick={() => setSidebarOpen(false)}>
                        <span className="nav-icon">📞</span>
                        <span className="nav-text">Contact</span>
                    </a>
                </nav>

                {/* <div className="sidebar-footer">
                    <p>Follow Us</p>
                    <div className="social-links">
                        <a href="#facebook" className="social-link">📘</a>
                        <a href="#instagram" className="social-link">📷</a>
                        <a href="#twitter" className="social-link">🐦</a>
                    </div>
                </div> */}
            </div>

            {/* Sidebar Overlay */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

            {/* Hamburger Menu Button */}
            <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </>
    );
}

export default Sidebar;
