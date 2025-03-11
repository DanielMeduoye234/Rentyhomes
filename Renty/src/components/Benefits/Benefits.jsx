import React from 'react'
import './Benefits.css'
import {motion} from 'framer-motion'

const Benefits = () => {
  return (
    <div className='Benefits'>
        <div className="container">
            <div className="benefit-left">
                <h5>Benefits</h5>
                <h2>Why choose Us</h2>
                <p className='Benefit-des'> Renty is a trustworthy developer in the real estate business. He has developed a reputation for trust and will have that reputation for years to come.</p>
                <div className="benefit-option">
                <div className="optionns">
                    <img src="./trusted.png" alt=""width={30} height={30} />
                    <p className='opt'>Trusted Developers</p>
                </div>
                <div className="optionns">
                    <img src="./cosp.png" alt="" width={30} height={30}/>
                    <p className='opt'>No Commissions</p>
                </div>
                <div className="optionns">
                    <img src="./safe.png" alt=""width={30} height={30}/>
                    <p className='opt'>A safe and Trustworthy</p>
                </div>
                <div className="optionns">
                    <img src="./buy.png" alt="" width={30} height={30}/>
                    <p className='opt'>Buy with Confidence</p>
                </div>
            </div>
            </div>
            <motion.div className="Benefit-right"
            initial={{ x: 100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            >
                <img src="./ben2.png" alt="" />
            </motion.div>

        </div>
    </div>
  )
}

export default Benefits