import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='Servicesz'>
        <div className="container">
            <div className="services-grids">
                <img src="./house.png" alt="" width={'50px'} height={'50px'} />
                <h4> Property Buying</h4>
                <p>We offer a wide range of verified listings, making it easy for you to find your dream home or investment property. Our platform provides detailed property information, high-quality images, and neighborhood insights to help you make informed decisions.</p>
            </div>
            <div className="services-grids">
                <img src="./property.png" alt="" width={'50px'} height={'50px'} />
                <h4> Property Selling</h4>
                <p>Looking to sell your property? We connect you with potential buyers, ensuring you get the best deal. Our platform offers marketing solutions, pricing guidance, and expert assistance to streamline the selling process.</p>
            </div>
            <div className="services-grids">
                <img src="./smart-house.png" alt="" width={'50px'} height={'50px'} />
                <h4> Property Leasing</h4>
                <p>Whether you’re a landlord looking to rent out your property or a tenant searching for a home, we facilitate hassle-free leasing. Our system allows you to browse available rentals, communicate with property owners, and finalize agreements securely.</p>
            </div>
            <div className="services-grids">
                <img src="./rights.png" alt="" width={'50px'} height={'50px'} />
                <h4> Secure Transactions</h4>
                <p>We ensure that all property listings are verified to prevent fraudulent activities. Our secure transaction process gives buyers, sellers, and renters peace of mind throughout the deal.</p>
            </div>
            <div className="services-grids">
                <img src="./agency.png" alt="" width={'50px'} height={'50px'} />
                <h4>Real Estate Consultation</h4>
                <p>Need expert advice? Our team of real estate professionals is available to guide you on market trends, property valuation, and legal procedures, ensuring you make informed decisions.</p>
            </div>
            <div className="services-grids">
                <img src="./residential.png" alt="" width={'50px'} height={'50px'}/>
                <h4>Virtual Property Tours</h4>
                <p>Explore properties from the comfort of your home with our high-quality virtual tours. This service allows you to inspect properties in detail before scheduling a physical visit.</p>
            </div>
        </div>
    </div>
  )
}

export default Services