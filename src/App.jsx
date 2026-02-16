import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

import Nav from './Components/Nav'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Navtop from './Components/Navtop'

import Aboutus from './Pages/Aboutus'
import ContactUs from './Pages/ContactUs'
import Home from './Pages/Home'
import DetailPage from './Pages/DetailPage'
import Detail from "./Pages/Detail"
import BannerContentPage from './Components/Cleaning'
import Curtain from './Pages/Curtain'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navtop />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/curtain" element={<Curtain />} />
        <Route path="/blinds" element={<DetailPage />} />
        <Route path="/blinds/:slug" element={<Detail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/portfolio/:slug" element={<Detail />} />
        <Route path="/cleaning" element={<BannerContentPage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
