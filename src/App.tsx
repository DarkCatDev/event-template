import { Routes, Route, useLocation } from 'react-router-dom'


import NavBar from './components/nav-bar/Navbar'
import Footer from './components/footer/Footer'

//import ng webpages components
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Gallery from './pages/gallery/Gallery'
import { useEffect } from 'react'
import RSVP from './pages/rsvp/Rsvp'
import OurStory from './pages/our-story/OurStory';


function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/rsvp' element={<RSVP />} />
        <Route path='/our-story' element={<OurStory />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
