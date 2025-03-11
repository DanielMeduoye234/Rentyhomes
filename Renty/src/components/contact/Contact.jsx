import React from "react";
import "./Contact.css";
import {motion} from 'framer-motion'

const Contact = () => {
	return (
		<div className="contact-us">
			<div className="container">
				<div className="contact-from">
					<h1>Get in Touch</h1>
					<p>
						Get in touch with Us so that we can know how we can help!
					</p>
					<div className="form">
						<input
							type="text"
							placeholder="Name"
							name="name"
							required
						/>
						<input
							type="text"
							placeholder="Email"
							name="email"
							required
						/>
						<textarea
							name="message"
							placeholder="Your Message"
							required
						/>
						<button type="submit">Submit Message</button>
					</div>
				</div>
				<motion.div className="contact-img"
					initial={{ scale: 0.8, opacity: 0 }} 
					whileInView={{ scale: 1, opacity: 1 }} 
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<img src="./Contactimage.jpg" alt="contact us image" />
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
