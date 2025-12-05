import { useState } from 'react'
import './App.css'
import { tourismData } from './data/tourismData'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Tours from './components/Tours'
import Gallery from './components/Gallery'
import Packages from './components/Packages'
import Maps from './components/Maps'
import About from './components/About'
import Contact from './components/Contact'
import TourModal from './components/TourModal'
import Footer from './components/Footer'

function App() {
  const [selectedTour, setSelectedTour] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Home data={tourismData} />

      <Tours
        data={tourismData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        setSelectedTour={setSelectedTour}
      />

      <Gallery data={tourismData} />

      <Packages data={tourismData} />

      <Maps data={tourismData} />

      <About data={tourismData} />

      <Contact data={tourismData} />

      <TourModal selectedTour={selectedTour} setSelectedTour={setSelectedTour} />

      <Footer />
    </div>
  )
}

export default App
