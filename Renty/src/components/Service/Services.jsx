import React from "react";
import "./Services.css";
import { FaStarOfLife } from "react-icons/fa";
import {motion} from 'framer-motion'

const Services = () => {


	return (
		<div className="Services">
			<div className="container">
				<motion.div className="lefty"
				initial={{ x: -100, opacity: 0 }} 
				whileInView={{ x: 0, opacity: 1 }} 
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true }}
				>
					<img src="./Services.png" alt="Services" />
				</motion.div>
				<div className="right">
					<h5>Our Services</h5>
					<h2>We make your comfort our top priority.</h2>
					<p>
						In a free hour, when our power of choice is untrammelled
						and when nothing prevents our being able to do what we
						like best.
					</p>
					<div className="features">
						<div className="feature-row">
							<span className="feature-item">
								<FaStarOfLife className="icon" /> Best market
							</span>
							<span className="feature-item">
								<FaStarOfLife className="icon" /> Unstable
								prices
							</span>
						</div>
						<div className="feature-row">
							<span className="feature-item">
								<FaStarOfLife className="icon" /> Top sell
							</span>
							<span className="feature-item">
								<FaStarOfLife className="icon" /> Security of
								data
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
