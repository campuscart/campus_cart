import React, { useState } from 'react';

import './hero.css';

function HeroSection() {
	const [orange1, setOrange1] = useState(false);
	const [orange2, setOrange2] = useState(false);
	const [orange3, setOrange3] = useState(false);
	return (
		<div className="hero-section">
			<div className="banner">
				{/* <h1>Let The Journey Begin</h1> */}
				<span>Let The</span>
				<span id="journey"> Journey</span>
				<span>Begin</span>
				<br></br>
				<p>Start planning your IIITA stay with CampusCart</p>
			</div>
			<div className="card-container">
				<div
					id="card1"
					className={orange1 ? 'card orange' : 'card'}
					onMouseEnter={() => setOrange1(true)}
					onMouseLeave={() => setOrange1(false)}
				>
					<h2 className="title">Beat summers with Campuscoolers</h2>
					<br></br>
					<p className="description">
						Rent/ Buy coolers from an inhouse Startup at most
						affordable rates with quality assurance and insurance
					</p>
					<br></br>
					<button>Read More</button>
				</div>
				<div
					id="card2"
					className={orange2 ? 'card orange' : 'card'}
					onMouseEnter={() => setOrange2(true)}
					onMouseLeave={() => setOrange2(false)}
				>
					<h2 className="title">Sell your Old coolers</h2>
					<br></br>
					<p className="description">
						Whatever the condition of your cooler we have a price
						for it. Forget the hassle to find the right junior for
						your cooler and sell it to campusCooler
					</p>
					<br></br>
					<button>Read More</button>
				</div>
				<div
					id="card3"
					className={orange3 ? 'card orange' : 'card'}
					onMouseEnter={() => setOrange3(true)}
					onMouseLeave={() => setOrange3(false)}
				>
					<h2 className="title">All necessities at one place</h2>
					<br></br>
					<p className="description">
						Mattress + Pillow + Bucket + Mug All a newcomer needs in
						a combo package.
					</p>
					<br></br>
					<button>Read More</button>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
