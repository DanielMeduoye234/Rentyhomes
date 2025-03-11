import React from 'react'
import './Herobanner.css'
import { useLocation } from 'react-router-dom'

const herobanner = () => {
  const location = useLocation()
  const pageTitles = {
    "/": "Welcome to Our Site",
    "/about": "About Us",
    "/services": "Our Services",
    "/contact": "Contact Us",
    "/houses": "Properties",
    "/listings": "Available Listings"
  };


  const title = pageTitles[location.pathname] || "Welcome";


  return (
    <div className='hero-banner'>
      <div className="container">
      <h1>{title}</h1>
      </div>
    </div>
  )
}

export default herobanner