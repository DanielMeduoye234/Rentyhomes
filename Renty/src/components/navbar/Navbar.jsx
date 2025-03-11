import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { CgMenuBoxed } from "react-icons/cg";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<div className="Navbar">
			{/* Property Links (Hidden on Mobile) */}
			<div className="property-links">
				<ul>
					<Link to="./houses">
						<li>All Properties</li>
					</Link>
					<Link to={"/houses?category=rent"}>
						<li>Rentals</li>
					</Link>
					<Link to={"/houses?category=sale"}>
						<li>Selling</li>
					</Link>
				</ul>
			</div>

			{/* Logo */}
			<Link to={"/"} className="logo">
				<img src="./Rentylogo.png" alt="logo" />
			</Link>

			{/* Desktop Navigation + Avatar */}
			<div className="page-links">
				<ul>
					<Link to={"/about"}>
						<li>About</li>
					</Link>
					<Link to={"/services"}>
						<li>Services</li>
					</Link>
					<Link to={"/contact"}>
						<li>Contact Us</li>
					</Link>
					{/* Avatar (Hidden on Mobile & Tablet) */}
					<Link to={"/Login"}>
						<div className="avatar">
							<Avatar
								alt="User Avatar"
								src="/static/images/avatar/2.jpg"
								sx={{ width: 24, height: 24 }}
							/>
						</div>
					</Link>
				</ul>
			</div>

			{/* Hamburger Menu (Only visible on Tablet & Mobile) */}
			<div className="hamburger" onClick={toggleMobileMenu}>
				<CgMenuBoxed color="white" size={30} />
			</div>

			{/* Mobile Menu */}
			<div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
				<div className="close-menu" onClick={closeMobileMenu}>
					<TiTimes color="white" size={30} />
				</div>
				<div className="mobile-links">
					<ul>
						<Link to={"/about"} onClick={closeMobileMenu}>
							<li>About</li>
						</Link>
						<Link to={"/services"} onClick={closeMobileMenu}>
							<li>Services</li>
						</Link>
						<Link to={"/contact"} onClick={closeMobileMenu}>
							<li>Contact Us</li>
						</Link>
						<Link
							to={"/houses?category=rent"}
							onClick={closeMobileMenu}
						>
							<li>Rentals</li>
						</Link>
						<Link
							to={"/houses?category=sale"}
							onClick={closeMobileMenu}
						>
							<li>Selling</li>
						</Link>
						<Link
							to={"/Login"}
							onClick={closeMobileMenu}
						>
							<li>My Profile</li>
						</Link>
					</ul>
					<div className="logo" style={{ marginTop: "40px", backgroundColor: 'green', padding: '10px 20px', border: '1px solid white', borderRadius: '5px' }}>
						<Link to={"/"} className="logo">
							<img src="./Rentylogo.png" alt="logo"onClick={closeMobileMenu} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
