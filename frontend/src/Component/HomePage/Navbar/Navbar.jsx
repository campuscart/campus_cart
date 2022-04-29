import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { BsBag } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="navbar">
			{/* here we will have the company name */}
			<div className="logo">
				<Link to={'/'}>
					<h1>campuscart</h1>
				</Link>
			</div>

			{/* A menu of options */}
			<div className={showMenu ? 'mobile-menu menu' : 'menu'}>
				<ul>
					<li>
						<Link to={'/buy'}>
							<h2>Buy/Rent</h2>
						</Link>
					</li>
					<li>
						<Link to={'/sell'}>
							<h2>Sell</h2>
						</Link>
					</li>
					<li>
						<Link to={'/buy'}>
							<h2>Maintenance</h2>
						</Link>
					</li>
					<li>
						<Link to={'/admin'}>
							<h2>Admin</h2>
						</Link>
					</li>
					<li>
						<a href="#">
							<BsBag
								style={{ fontSize: '16px', marginTop: '14px' }}
							></BsBag>
						</a>
					</li>
				</ul>
			</div>
			{/* Hamburger menu to show in mobile devices */}
			<div className="hamburger-menu">
				<a href="#" onClick={() => setShowMenu(!showMenu)}>
					<GiHamburgerMenu></GiHamburgerMenu>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
