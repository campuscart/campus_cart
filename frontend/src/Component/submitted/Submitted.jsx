import React from 'react';
import './submiited.css';
import { Link } from 'react-router-dom';

export default function Submitted() {
	return (
		<div className="submit_cont">
			<div className="submit_div">
				<img src={require('./green_tick.png')} className="green" />
				<div className="submit_text">
					Order Placed Successfully.
				</div>
			</div>
			
				<button className="form-field_submit home_submit">
					<Link to={'/'}>Go to Home </Link>
				</button>
		</div>
	);
}
