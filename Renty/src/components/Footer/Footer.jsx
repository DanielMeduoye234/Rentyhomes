import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="container">
				<div className="top">
					<div className="more-renty">
						<h3>More Renty</h3>
						<div className="footerlink">
							<p>FAQ</p>
							<p>About Us</p>
							<p>Contact Us</p>
							<p>Feedback</p>
							<p>Join Our Community</p>
							<p>Agent Support</p>
						</div>

						<div className="social-icon">
							<div className="facebook">
								<img src="./facebook.png" alt="" />
							</div>
							<div className="facebook">
								<img src="./twitter.png" alt="" />
							</div>
							<div className="facebook">
								<img src="./Linkedin.png" alt="" />
							</div>
							<div className="facebook">
								<img src="./instagram.png" alt="" />
							</div>
						</div>
						<div className="Renty-text">
							<p>
								Renty Group is committed to ensuring digital
								accessibility for individuals with disabilities.
								We are continuously working to improve the
								accessibility of our web experience for
								everyone.
							</p>
						</div>
					</div>
					<div className="stay-connected">
						<h3>Stay Connected</h3>
						<p>
							Sign up for inspiration for nourishing your body,
							mind and shine from inside. Added bonus: you'll get
							10% off your first Renty order.
						</p>
						<input type="email" placeholder="Email Address" />
						<button className="Subscribe">Subcribe</button>
					</div>
				</div>
				<div className="buttom">
					<div className="copyright">
						<p>©uihut.com 2025. All Rights Reserved.</p>
					</div>
					<div className="terms">
						<p>Terms of Use</p>
						<p>Terms of Privacy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
