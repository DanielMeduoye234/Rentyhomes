import React from 'react'
import './AboutUsetext.css'
import { Link } from 'react-router-dom'

const AboutUstext = () => {
  return (
    <div className='About-text'>
        <div className="container">
            <div className="about-top">
                <div className="about-img">
                    <img src="./aboutimage.jpg" alt="About image" />
                </div>
                <div className="about-text">
                <p>At Renty, we make finding your dream home simple, seamless, and stress-free. Whether you're looking to buy, sell, or lease a property, our platform connects you with the best options available.. Renty is a leading real estate marketplace dedicated to helping individuals and families find their perfect home. Our platform offers a vast selection of residential, commercial, and luxury properties with up-to-date listings from trusted sellers and landlords.</p>
                <button  className='contactbtn'><Link to={'/contact'}>Contact Us</Link></button>
                </div>
            </div>
            <div className="about-buttom">
                <div className="about-grids">
                    <img src="./target.png" alt="" width={'50px'} height={'50px'} />
                    <h4>Our Mission</h4>
                    <p>At Renty, our mission is to simplify the process of buying, selling, and renting homes by providing a seamless and user-friendly platform. We aim to connect homeowners, buyers, and renters with the best real estate opportunities, ensuring a smooth and secure transaction process.</p>
                </div>
                <div className="about-grids">
                    <img src="./vision.png" alt="" width={'50px'} height={'50px'} />
                    <h4>Our Vision</h4>
                    <p>We envision a future where finding the perfect home is effortless. By leveraging technology, we strive to create an innovative and transparent real estate marketplace that empowers individuals and families to make informed housing decisions with confidence.</p>
                </div>
                <div className="about-grids">
                    <img src="./goal.png" alt="" width={'50px'} height={'50px'}/>
                    <h4>Our Goals</h4>
                    <p>Our goal is to provide a secure and efficient platform where real estate transactions are seamless and stress-free. We are committed to enhancing user experience by integrating intuitive design and advanced search capabilities, making it easier for users to find their dream homes. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUstext