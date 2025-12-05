import React from 'react';

function Tours({ data, searchQuery, setSearchQuery, priceFilter, setPriceFilter, categoryFilter, setCategoryFilter, setSelectedTour }) {
    // Filter tours based on search, price, and category
    const filteredTours = data.tours.filter(tour => {
        const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tour.location.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPrice = priceFilter === 'all' ||
            (priceFilter === 'low' && parseInt(tour.price.replace(/[₹,]/g, '')) < 1000) ||
            (priceFilter === 'mid' && parseInt(tour.price.replace(/[₹,]/g, '')) >= 1000 && parseInt(tour.price.replace(/[₹,]/g, '')) < 1500) ||
            (priceFilter === 'high' && parseInt(tour.price.replace(/[₹,]/g, '')) >= 1500);

        const matchesCategory = categoryFilter === 'all' || tour.category === categoryFilter;

        return matchesSearch && matchesPrice && matchesCategory;
    });

    return (
        <>
            {/* Search and Filter Section */}
            <div id="tours" className="controls-section">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="🔍 Search tours by name or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    <label htmlFor="category-select" className="filter-label">🏛️ Filter by Category:</label>
                    <select
                        id="category-select"
                        className="category-select"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="Religious Place">🕉️ Religious Places</option>
                        <option value="Historic Place">🏛️ Historic Places</option>
                        <option value="Memorial">🏅 Memorials</option>
                        <option value="Beaches">🏖️ Beaches</option>
                        <option value="Boating">🛥️ Boating</option>
                        <option value="Sanctuaries">🐠 Sanctuaries</option>
                        <option value="Museum">🏛️ Museums</option>
                        <option value="Theertham">💧 Holy Waters</option>
                    </select>
                </div>

                {/* Price Filter
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${priceFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setPriceFilter('all')}
                    >
                        All Tours
                    </button>
                    <button
                        className={`filter-btn ${priceFilter === 'low' ? 'active' : ''}`}
                        onClick={() => setPriceFilter('low')}
                    >
                        Under ₹1,000
                    </button>
                    <button
                        className={`filter-btn ${priceFilter === 'mid' ? 'active' : ''}`}
                        onClick={() => setPriceFilter('mid')}
                    >
                        ₹1,000 - ₹1,500
                    </button>
                    <button
                        className={`filter-btn ${priceFilter === 'high' ? 'active' : ''}`}
                        onClick={() => setPriceFilter('high')}
                    >
                        ₹1,500+
                    </button>
                </div> */}
            </div>

            {/* Tours Grid */}
            <main className="tours-container">
                <div className="tours-grid">
                    {filteredTours.map(tour => (
                        <div
                            key={tour.id}
                            className="tour-card"
                            onClick={() => setSelectedTour(tour)}
                        >
                            <div className="tour-image-container">
                                <img src={tour.image} alt={tour.name} className="tour-image" />
                                <div className="tour-rating">⭐ {tour.rating}</div>
                                {/* <div className="tour-price">{tour.price}</div> */}
                            </div>

                            <div className="tour-content">
                                <div className="tour-category-badge">{tour.category}</div>
                                <h3 className="tour-name">{tour.name}</h3>
                                <p className="tour-location">📍 {tour.location}</p>
                                {/* <p className="tour-duration">⏱️ {tour.duration}</p> */}
                                <p className="tour-description">{tour.description}</p>

                                <div className="tour-highlights">
                                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                                        <span key={idx} className="highlight-badge">{highlight}</span>
                                    ))}
                                </div>

                                <button className="view-details-btn">View Details →</button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTours.length === 0 && (
                    <div className="no-results">
                        <h2>No tours found</h2>
                        <p>Try adjusting your search or filters</p>
                    </div>
                )}
            </main>
        </>
    );
}

export default Tours;
