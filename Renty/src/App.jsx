import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage'
import AboutUspage from './pages/Aboutpage'
import Footer from './components/Footer/Footer'
import Servicespage from './pages/Servicespage/'
import Contactpage from './pages/Contactpage'
import Houses from './pages/Apartment'
import Authpage from './pages/AuthPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/about' element={<AboutUspage />} />
        <Route path='/Services' element={<Servicespage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/houses' element={<Houses />} />
        <Route path='/Login' element={<Authpage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App