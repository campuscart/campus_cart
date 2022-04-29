import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './welcome.css';

function Welcome() {
	const [button, setButton] = useState(false);
	return (
		<div className="welcome-section">
			<div className="welcome-text">
				<div id="adv">
					<h3>Buy/rent all your necessities at one place</h3>
					<hr />

					<h4>With one day delivery at your doorstep</h4>
				</div>
				<div className="quote">
					<h1>Make your college life easy with</h1>
					<br></br>
					<h1>CampusCart</h1>
					<br></br>
				</div>
			</div>
			<Link to={'/buy'}>
				<button
					className={
						button
							? 'hover-button purchase-button'
							: 'purchase-button'
					}
					onMouseEnter={() => setButton(true)}
					onMouseLeave={() => setButton(false)}
				>
					PURCHASE NOW
				</button>
			</Link>
		</div>
	);
}

export default Welcome;
