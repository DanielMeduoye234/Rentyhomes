import React from 'react'
import Herosection from '../components/hero/Hero'

import Services from '../components/Service/Services'
import Benefits from '../components/Benefits/Benefits'
import Blogs from '../components/Blogs/Blogs'
import Faq from '../components/FAQ/Faq'


const homepage = () => {
  return (
    <div>
        <Herosection />
        <Services />
        <Benefits />
        <Blogs />
        <Faq />
        
    </div>
  )
}

export default homepage