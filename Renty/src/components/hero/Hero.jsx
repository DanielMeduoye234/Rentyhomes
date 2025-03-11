import React, { useState } from "react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
	const [location, setLocation] = useState("Yogyakarta");
	const [type, setType] = useState("Industrial Home");

	return (
		<section className="hero-section">
			<div className="container">
				<motion.div
					className="hero-img"
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<img src="./Image.jpg" alt="" />
				</motion.div>
				<div className="hero-text">
					<motion.h1
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						Discover the ideal property here
					</motion.h1>
					<p>
						As soon as I had found a few properties that suited me,
						I was able to forget about how difficult it was to find
						a suitable home.
					</p>
					<div className="search-bar">
						<div className="search-option">
							<FaMapMarkerAlt className="icon" />
							<div>
								<label>Location</label>
								<select 
									value={location}
									onChange={(e) =>
										setLocation(e.target.value)
									}
								>
									<option value="Yogyakarta">
										Yogyakarta
									</option>
									<option value="Jakarta">Jakarta</option>
									<option value="Bali">Bali</option>
								</select>
							</div>
						</div>

						<div className="search-option">
							<FaHome className="icon" />
							<div>
								<label>Type</label>
								<select
									value={type}
									onChange={(e) => setType(e.target.value)}
								>
									<option value="Industrial Home">
										Industrial Home
									</option>
									<option value="Modern Home">
										Modern Home
									</option>
									<option value="Traditional Home">
										Traditional Home
									</option>
								</select>
							</div>
						</div>

						<button className="search-button">Search</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
